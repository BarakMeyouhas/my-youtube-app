import { youtube } from "../../Frontend/src/Components/Redux/Store";
import express, { NextFunction, Request, Response } from "express";
import {
  addSong,
  deleteSongById,
  getAllSongs,
  getSongById,
  updateSong,
  catList,
  getCatById,
  deleteCatById,
  addCat,
  updateCat,
} from "../Logic/YoutubeLogic";

const youtubeRouter = express.Router();

youtubeRouter.get(
  "/songList",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in song route");
    return response.status(200).json(await getAllSongs());
  }
);

youtubeRouter.get(
  "/songById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const songID = +request.params.id;
    return response.status(200).json(await getSongById(songID));
  }
);

youtubeRouter.delete(
  "/deleteSongById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const songID = +request.params.id;
    await deleteSongById(songID);
    return response.status(200).json({});
  }
);

youtubeRouter.post(
  "/addSong",
  async (request: Request, response: Response, next: NextFunction) => {
    const newSong = request.body;
    const result = await addSong(newSong);
    return response.status(201).json(`${result}`);
  }
);

youtubeRouter.put(
  "/updateSong",
  async (request: Request, response: Response, next: NextFunction) => {
    const song = request.body;
    return response.status(201).json(await updateSong(song));
  }
);

youtubeRouter.get(
  "/catList",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("in category list");
    return response.status(200).json(await catList());
  }
);

youtubeRouter.get(
  "/catById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const categoryId = +request.params.id;
    return response.status(200).json(await getCatById(categoryId));
  }
);

youtubeRouter.delete(
  "/deleteCatById/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const categoryId = +request.params.id;
    await deleteCatById(categoryId);
    return response.status(200).json({});
  }
);

youtubeRouter.post(
  "/addCat",
  async (request: Request, response: Response, next: NextFunction) => {
    const newCategory = request.body;
    const result = await addCat(newCategory);
    return response.status(201).json(`${result}`);
  }
);

youtubeRouter.put(
  "/updateCat/:categoryId",
  async (request: Request, response: Response, next: NextFunction) => {
    const categoryId = request.params.categoryId;
    const updatedCategory = request.body;

    // Call the updateCat function with categoryId and updatedCategory

    return response.status(201).json(updatedCategory);
  }
);

export default youtubeRouter;
