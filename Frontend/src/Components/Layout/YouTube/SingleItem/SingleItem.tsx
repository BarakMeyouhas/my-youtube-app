import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
import { youtube } from "../../../Redux/Store";
import { deleteSongAction } from "../../../Redux/SongReducer";
import {
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

interface itemProps {
  url: string;
  title: string;
  description: string;
  img: string;
  category: number;
  categoryName: string;
  id: number;
}

function SingleItem(props: itemProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div className="SingleItem">
      <div className="Box" style={{ width: "95%" }}>
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
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to delete the song?</DialogTitle>
        <DialogContent>
        </DialogContent>
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
    </div>
  );
}

export default SingleItem;
