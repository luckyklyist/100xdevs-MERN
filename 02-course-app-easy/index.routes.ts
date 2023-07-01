import express, { Request, Response } from 'express';
import { signUpAdmin, loginAdmin } from './controller/user.controller';

const router = express.Router();

router.get('/', (_, res) => res.status(200).send({ message: "server is running" }))
// Admin routes
router.post("/admin/signup", signUpAdmin);

router.post("/admin/login", loginAdmin);

router.post("/admin/courses", (req, res) => {
  // logic to create a course
  try {
    const courseData = req.body;
    COURSES.push(courseData);
    res.status(201).send({ message: "course created" })
  }
  catch (err) {
    res.status(500).send({ message: err })
  }
});

router.put("/admin/courses/:courseId", (req, res) => {
  // logic to edit a course
  try {
    const courseData = req.body;

  }
  catch (err) {
    res.status(500).send({ message: err })
  }
});

router.get("/admin/courses", (req, res) => {
  // logic to get all courses
  try {
    res.status(201).send({ courses: COURSES });
  }
  catch (err) {
    res.status(500).send({ message: err })
  }
});

// User routes
router.post("/users/signup", (req, res) => {
  // logic to sign up user
});

router.post("/users/login", (req, res) => {
  // logic to log in user
});

router.get("/users/courses", (req, res) => {
  // logic to list all courses
});

router.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

router.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

export default router;