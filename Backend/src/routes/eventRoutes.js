import express from "express";
import {
  addEvent,
  getAllEvents,
  getOneEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

// Add new event
router.post("/events", addEvent);

// Fetch all events
router.get("/events", getAllEvents);

// Fetch one event by ID
router.get("/events/:EventID", getOneEvent);

// Update event
router.put("/events/:EventID", updateEvent);

// Delete event
router.delete("/events/:EventID", deleteEvent);

export default router;
