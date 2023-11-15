import { useState, useEffect } from "react";
import "./AddSongForm.css";
import axios from "axios";
import Song from "../../modal/Song";
import { useNavigate } from "react-router-dom";
import { youtube } from "../../Redux/Store";
import { addSongAction } from "../../Redux/SongReducer";
import { downloadCategoryAction } from "../../Redux/CategoriesReducer";

function AddSongForm(): JSX.Element {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (youtube.getState().category.categories.length < 1) {
      axios
        .get("http://localhost:4000/api/v1/youtube/catList")
        .then((response) => response.data)
        .then((result) => {
          youtube.dispatch(downloadCategoryAction(result));
          setRefresh(true);
        });
    }
  }, []);

  const [songURL, setURL] = useState("");
  const [songTitle, setTitle] = useState("");
  const [songDesc, setDesc] = useState("");
  const [songImg, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  const apiKey = "AIzaSyBKQzeoMIHA942XqOho1fwPedksQ5fps2s";
  const apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${apiKey}&id=`;

  const searchSong = () => {
    const songID = songURL.split("=")[1];
    axios.get(apiURL + songID).then((response) => {
      setTitle(response.data.items[0].snippet.channelTitle);
      setDesc(response.data.items[0].snippet.title);
      setImage(response.data.items[0].snippet.thumbnails.medium.url);
    });
  };

  const addNewSong = async () => {
    const selectedCategoryObject = youtube
      .getState()
      .category.categories.find((cat) => cat.id === +selectedCategory);

    const newSong = new Song(
      songDesc,
      songImg,
      songTitle,
      songURL,
      youtube.getState().songs.allSongs.length + 1,
      selectedCategoryObject ? selectedCategoryObject.id : 1,
      selectedCategoryObject ? selectedCategoryObject.name : ""
    );

    console.log("New Song Data:", newSong);

    try {
      const id = (
        await axios.post(
          "http://localhost:4000/api/v1/youtube/addSong",
          newSong
        )
      ).data;

      newSong.id = +id;
      youtube.dispatch(addSongAction(newSong));
      navigate("/");
    } catch (error) {
      console.error("Error adding new song:", error);
    }
  };

  return (
    <div className="AddSongForm">
      <h1>add new song</h1>
      <hr />
      <input
        type="url"
        onKeyUp={(args) => {
          setURL(args.currentTarget.value);
        }}
      />
      <input type="submit" value="search" onClick={searchSong} />
      <br />
      <br />
      <select
        onChange={(args) => {
          setSelectedCategory(args.currentTarget.value);
        }}
      >
        <option disabled selected>
          Select category
        </option>
        {youtube.getState().category.categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <hr />
      <img src={songImg} alt={songTitle} />
      <br />
      <h2>{songTitle}</h2>
      <br />
      <hr />
      <h3>{songDesc}</h3>
      <br />
      <hr />
      <input type="submit" value="add song" onClick={addNewSong} />
    </div>
  );
}

export default AddSongForm;
