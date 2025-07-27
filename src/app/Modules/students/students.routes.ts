import { Router } from "express";
import { StudentController } from "./students.controller";

const router = Router();

router.post("/create", StudentController.createStudent);
router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getSingleStudnet);
router.patch("/update/:id", StudentController.updateStudent);
export const StudentRoutes = router;
