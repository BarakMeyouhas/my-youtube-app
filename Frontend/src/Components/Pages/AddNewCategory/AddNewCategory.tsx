import { SyntheticEvent, useEffect, useState } from "react";
import "./AddNewCategory.css";
import { useNavigate } from "react-router-dom";
import { youtube } from "../../Redux/Store";
import {
  addCategoryAction,
  deleteCategoryAction,
  downloadCategoryAction,
  updateCategoryAction,
} from "../../Redux/CategoriesReducer";
import { Category } from "../../modal/Category";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteSong from "../deleteSong/deleteSong";

function AddNewCategory(): JSX.Element {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    if (youtube.getState().category.categories.length < 1) {
      axios
        .get("http://localhost:4000/api/v1/youtube/catList")
        .then((response) => response.data)
        .then((data) => youtube.dispatch(downloadCategoryAction(data)));
    }
  }, [refresh]);

  const addNewCat = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/youtube/addCat",
        {
          name: category,
        }
      );

      const newCategory: Category = response.data;
      youtube.dispatch(addCategoryAction(newCategory));
      // Fetch the latest category list after adding a new category
      const updatedResponse = await axios.get(
        "http://localhost:4000/api/v1/youtube/catList"
      );
      const updatedData = updatedResponse.data;
      youtube.dispatch(downloadCategoryAction(updatedData));

      // Update the Redux store immediately after adding a new category
      setCategory("");
    } catch (error) {
      console.error("Error adding new category:", error);
    }
    setRefresh(true);
  };

  const handleEditCategorySubmit = async () => {
    try {
      if (editItemId === null) {
        // Handle the case where editItemId is null (optional)
        console.error("editItemId is null");
        return;
      }

      const updatedCategory = {
        id: editItemId,
        name: editCategoryName,
      };

      await axios.put(
        `http://localhost:4000/api/v1/youtube/updateCat/${editItemId}`,
        updatedCategory
      );

      // Update the Redux store to reflect the changes
      youtube.dispatch(updateCategoryAction(updatedCategory));
      setRefresh((prevRefresh) => !prevRefresh);
      handleEditModalClose(); // Close the modal after a successful edit
    } catch (error) {
      console.error(`Error updating category with id ${editItemId}:`, error);
    }
  };

  const handleOpenEditModal = (categoryId: number, categoryName: string) => {
    setEditItemId(categoryId);
    setEditCategoryName(categoryName);
    setEditModalOpen(true);
  };
  const handleEditModalClose = () => {
    setEditItemId(null);
    setEditCategoryName("");
    setEditModalOpen(false);
  };

  const handleDeleteCategory = async (categoryId: number) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/youtube/deleteCatById/${categoryId}`
      );

      // Update the Redux store to remove the deleted category
      youtube.dispatch(deleteCategoryAction(categoryId));
      setRefresh((prevRefresh) => !prevRefresh);
    } catch (error) {
      console.error(`Error deleting category with id ${categoryId}:`, error);
    } finally {
      handleClose();
    }
  };
  const handleOpen = (categoryId: number) => {
    setDeleteItemId(categoryId);
    setOpen(true);
  };

  const handleClose = () => {
    setDeleteItemId(null);
    setOpen(false);
  };

  return (
    <div className="AddNewCategory">
      <div className="Box">
        <input
          placeholder="Category name..."
          onKeyUp={(args) => {
            setCategory(args.currentTarget.value);
          }}
        />
        <Button variant="contained" onClick={addNewCat}>
          Add
        </Button>
      </div>
      <Table style={{ width: "60%" }}>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {youtube.getState().category.categories.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleOpenEditModal(item.id, item.name)}
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton color="error" onClick={() => handleOpen(item.id)}>
                  {" "}
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={editModalOpen} onClose={handleEditModalClose}>
        <DialogTitle>Edit Category</DialogTitle>
        <DialogContent>
          <input
            type="text"
            value={editCategoryName}
            onChange={(e) => setEditCategoryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditModalClose} style={{ color: "#555555" }}>
            Cancel
          </Button>
          <Button
            onClick={handleEditCategorySubmit}
            style={{ color: "#ffffff", backgroundColor: "#4caf50" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Are you sure you want to delete this category?
        </DialogTitle>
        <DialogContent>{}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#555555" }}>
            Cancel
          </Button>
          <Button
            onClick={() =>
              deleteItemId !== null && handleDeleteCategory(deleteItemId)
            }
            style={{ color: "#ffffff", backgroundColor: "#e57373" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewCategory;
