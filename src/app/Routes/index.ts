import { Router } from "express";
import { StudentRoutes } from "../Modules/students/students.routes";

const router = Router();

const moduleRoutes = [{ path: "/student", route: StudentRoutes }];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
