// SingleItem.tsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
import { youtube } from "../../../Redux/Store";
import { deleteSongAction, updateFavoriteStatusAction } from "../../../Redux/SongReducer";
import {
  Card,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

interface itemProps {
  url: string;
  title: string;
  description: string;
  img: string;
  category: number;
  categoryName: string;
  id: number;
  isFavorite: boolean;
}

function SingleItem(props: itemProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Fetch the list of favorite songs and update the isLiked state accordingly
    const fetchFavoriteSongs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/youtube/favoriteSongs");
        const favoriteSongs = response.data;
        setIsLiked(favoriteSongs.some((song: { id: number; }) => song.id === props.id));
      } catch (error) {
        console.error("Error fetching favorite songs:", error);
      }
    };

    fetchFavoriteSongs();
  }, [props.id]);

  const deleteSong = async () => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/youtube/deleteSongById/${props.id}`
      );
      youtube.dispatch(deleteSongAction(props.id));
      navigate(`/deleteSong/${props.title}`);
    } catch (error) {
      console.error("Error deleting song:", error);
    } finally {
      handleClose(); // Close the modal after the action is completed
    }
  };

  const handleLikeClick = async () => {
    try {
      setIsLiked(!isLiked);
      await axios.put(
        `http://localhost:4000/api/v1/youtube/updateFavoriteStatus/${props.id}`,
        { favorite: !isLiked }
      );
      youtube.dispatch(
        updateFavoriteStatusAction({
          ...props,
          favorite: !isLiked,
        })
      );
      console.log(youtube.getState().songs.favoriteSongs);
    } catch (error) {
      console.error(
        `Error updating favorite status for song with id ${props.id}:`,
        error
      );
    }
  };

  return (
    <Grid item className="SingleItem">
      <Card className="" style={{ width: "95%" }}>
        <div className="Grid-Parent">
          <div
            className="Grid-Child"
            onClick={() => {
              navigate(`/player/${props.title}/${props.url.split("=")[1]}`);
            }}
          >
            <img src={props.img} width={200} alt={props.title} />
          </div>
          <div className="Grid-Child">
            {props.title}
            <hr />
            {props.description}
            <hr />
            Category: {props.categoryName} <br />
            <br />
            <IconButton color="secondary" onClick={handleLikeClick}>
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <Chip
              label="Delete"
              deleteIcon={<DeleteIcon />}
              onClick={handleOpen}
              variant="outlined"
            />
            <Chip
              label="Edit"
              onClick={() => {
                navigate(`/editSong/${props.id}`);
              }}
            />
          </div>
        </div>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to delete this song?</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#555555" }}>
            Cancel
          </Button>
          <Button
            onClick={deleteSong}
            style={{ color: "#ffffff", backgroundColor: "#e57373" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default SingleItem;
