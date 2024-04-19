import { Router } from "express";
import { getTasks, getTask, deleteTask, addTask, updateTask } from "../controllers/task";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.post('/', addTask);
router.put('/:id', updateTask)

export default router;
