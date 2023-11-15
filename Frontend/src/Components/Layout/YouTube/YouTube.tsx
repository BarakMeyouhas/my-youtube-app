import { useNavigate, useParams } from "react-router-dom";
import SingleItem from "./SingleItem/SingleItem";
import "./YouTube.css";
import { useEffect, useState } from "react";
import { youtube } from "../../Redux/Store";
import { downloadSongsAction } from "../../Redux/SongReducer";
import axios from "axios";
import { downloadCategoryAction } from "../../Redux/CategoriesReducer";

function YouTube(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();

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
    if (youtube.getState().songs.allSongs.length < 1) {
      axios
        .get("http://localhost:4000/api/v1/youtube/songList")
        .then((response) => response.data)
        .then((result) => {
          youtube.dispatch(downloadSongsAction(result));
          setRefresh(true);
        });
    }
  }, []);

  // Use params.categoryId to filter songs by category
  const categoryId = Number(params.categoryId) || 0;

  // Check if categoryId is defined to determine whether to filter songs
  const filteredSongs = categoryId
    ? youtube
        .getState()
        .songs.allSongs.filter((item) => item.category === categoryId)
    : youtube.getState().songs.allSongs;

  return (
    <div className="YouTube">
      {filteredSongs.map((item) => (
        <SingleItem
          key={item["id"]}
          url={item["url"]}
          category={item["category"]}
          categoryName={item["categoryName"]}
          title={item["title"]}
          description={item["description"]}
          img={item["img"]}
          id={item["id"]}
        />
      ))}
    </div>
  );
}

export default YouTube;
