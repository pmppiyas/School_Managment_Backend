import { Router } from "express";
import { StudentController } from "./students.controller";

const router = Router();

router.post("/create", StudentController.createStudent);
router.get("/", StudentController.getAllStudents);

export const StudentRoutes = router;
