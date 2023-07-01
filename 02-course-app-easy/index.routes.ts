import express, { Request, Response } from 'express';
import { signUpAdmin, loginAdmin } from './controller/user.controller';
import { createCourse,getCourse,updateCourse } from './controller/course.controller';
import isAuthenticated from './middlewares/auth.middleware';

const router = express.Router();

router.get('/',isAuthenticated, (_, res) => res.status(200).send({ message: "server is running" }))
// Admin routes
router.post("/admin/signup", signUpAdmin);

router.post("/admin/login", loginAdmin);

router.post("/admin/courses",createCourse);

router.put("/admin/courses/:courseId",updateCourse);

router.get("/courses", getCourse);

router.post("/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

router.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

export default router;