import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import axios from "axios";
import Song from "../../modal/Song";
import { useNavigate } from "react-router-dom";
import { youtube } from "../../Redux/Store";
import { addSongAction } from "../../Redux/SongReducer";

function AddSongForm(): JSX.Element {
  const [songURL, setURL] = useState("");
  const [songTitle, setTitle] = useState("");
  const [songDesc, setDesc] = useState("");
  const [songImg, setImage] = useState("");
  const [songDate, setSongDate] = useState("");
  const [isCardVisible, setCardVisibility] = useState(false);

  const navigate = useNavigate();

  const apiKey = "AIzaSyBKQzeoMIHA942XqOho1fwPedksQ5fps2s";
  const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=`;

  const searchSong = () => {
    const songID = songURL.split("=")[1];
    axios.get(apiURL + songID).then((response) => {
      setTitle(response.data.items[0].snippet.channelTitle);
      setDesc(response.data.items[0].snippet.title);
      setImage(response.data.items[0].snippet.thumbnails.medium.url);
      setSongDate(response.data.items[0].snippet.publishedAt);
      setCardVisibility(true);
    });
  };

  const date = new Date(songDate);

  function formatDate(date: any) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
  const formattedDate = formatDate(date);

  const addNewSong = () => {
    let allSongs = JSON.parse(localStorage.getItem("songs") as any);
    const newSong = new Song(
      songDesc,
      songImg,
      songTitle,
      songURL,
      youtube.getState().songs.allSongs.length + 1
    );
    allSongs.push(newSong);
    localStorage.setItem("songs", JSON.stringify(allSongs));
    youtube.dispatch(addSongAction(newSong));
    navigate("/");
  };

  return (
    <div className="AddSongForm">
      <h1>add new song</h1>
      <hr />
      <TextField
        type="url"
        label="Enter YouTube URL"
        variant="outlined"
        onChange={(event) => {
          setURL(event.target.value);
        }}
        style={{ height: "56px" }}
      />
      <Button
        variant="contained"
        onClick={searchSong}
        style={{ height: "56px" }}
      >
        <SearchIcon />
      </Button>
      <hr />
      {isCardVisible && (
        <Card sx={{ maxWidth: 500, margin: "auto" }}>
          <div className="songDetails">
            <div className="songText">
              <CardHeader
                title={songTitle}
                subheader={`Published at: ${formattedDate}`}
              />
              <br />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {songDesc}
                </Typography>
              </CardContent>

              <img src={songImg} alt="song thumbnail" />
              <br />
              <br />
            </div>
          </div>
        </Card>
      )}
      <Button
        variant="contained"
        onClick={addNewSong}
        style={{ height: "56px" }}
      >
        Add Song
      </Button>
    </div>
  );
}

export default AddSongForm;
