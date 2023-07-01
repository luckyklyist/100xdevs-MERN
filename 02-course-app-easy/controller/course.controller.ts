import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

interface courseData {
    courseID: number,
    title: string,
    description: string,
    price: number,
    imageLink: string,
    published: boolean
}

let COURSE: courseData[] = [];

const createCourse = async (req: Request, res: Response) => {
    try {
        const courseData: courseData = req.body;
        const courseID = uuidv4();
        COURSE.push({ ...courseData, courseID });
        return res.send({ message: 'Course created successfully', courseID })
    }
    catch (err) {
        res.status(500).send(err);
    }

}

const getCourse = async (req: Request, res: Response) => {
    try {
        res.status(200).send(COURSE);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updateCourse = async (req: Request, res: Response) => {
    try {
        const courseId:unknown=req.params.courseId;
        const courseExist=COURSE.some((course)=>course.courseID===courseId);
        if (courseExist){
            const courseData:courseData=req.body;
            COURSE=COURSE.map((course)=>{
                console.log(course.courseID);
                if(course.courseID===courseId){
                    return courseData;
                }
                return course;
            })
            return res.send({message:COURSE})
        }
        return res.send({message:"course dose not exist"});
    }
    catch (err) {
        res.status(500).send(err);
    }
}


export { createCourse, getCourse ,updateCourse};