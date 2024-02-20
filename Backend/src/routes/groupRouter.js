import express from "express";
import { createGroup, getAllGroups, getOneGroup, updateGroupDetails, deleteGroup } from "../controllers/groupsController.js";

const router = express.Router();

router.post("/groups", createGroup);
router.get("/groups", getAllGroups);
router.get("/groups/:group_id", getOneGroup);
router.put("/groups/:group_id", updateGroupDetails);
router.delete("/groups/:group_id", deleteGroup);

export default router;
