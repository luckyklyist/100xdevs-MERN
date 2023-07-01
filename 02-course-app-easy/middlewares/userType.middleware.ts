import { Request, Response, NextFunction } from "express";
import { ADMINS, USERS } from "../controller/user.controller";

interface userData{
    username:string;
    role:string;
    password:string;
}

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {username,password}=req.body;
        const checkAdmin = ADMINS.some((admin:userData) => admin.username === username && admin.password === password)
        if(checkAdmin){
            next();
        }
        return res.send({message:"Permission denied"})
    }
    catch (err){
        return res.status(500).send(err)

    }
}

export default checkAdmin;