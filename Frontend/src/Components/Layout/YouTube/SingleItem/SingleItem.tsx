import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
import { youtube } from "../../../Redux/Store";
import { deleteSongAction } from "../../../Redux/SongReducer";
import { Chip } from "@mui/material";
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
  
  const deleteSong = async () => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/youtube/deleteSongById/${props.id}`
      );
      youtube.dispatch(deleteSongAction(props.id));
      navigate(`/deleteSong/${props.title}`);
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };
  const navigate = useNavigate();
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
            <img src={props.img} width={200} />
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
              onDelete={deleteSong}
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
    </div>
  );
}

export default SingleItem;
