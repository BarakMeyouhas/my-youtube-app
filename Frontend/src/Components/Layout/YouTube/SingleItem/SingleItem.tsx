import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
import { youtube } from "../../../Redux/Store";
import { deleteSongAction } from "../../../Redux/SongReducer";
import { Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface itemProps {
  url: string;
  title: string;
  description: string;
  img: string;
  category: any;
  categoryName: string;
  id: number;
}
function SingleItem(props: itemProps): JSX.Element {
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
            Category: {props.categoryName}{" "}
            <br /><br />
            <Chip
              label="Delete"
              deleteIcon={<DeleteIcon />}
              onDelete={() => {
                youtube.dispatch(deleteSongAction(props.id));
                navigate(`/deleteSong/${props.title}`);
              }}
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
