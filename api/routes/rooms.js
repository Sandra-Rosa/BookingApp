import express from 'express'
const router = express.Router();
import {verifyAdmin} from "../utils/verifyToken.js"
import { createRoom,updateRoom,deleteRoom,getRoom,getRooms,updateRoomAvailability } from '../controllers/room.js';
//create
router.post("/:hotelid",verifyAdmin,createRoom);
//update
router.put("/:id",verifyAdmin,updateRoom)
router.put("availablity/:id",updateRoomAvailability)
//delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
//get
router.get("/:id",getRoom)
 //get all
 router.get("/",getRooms)
export default router;