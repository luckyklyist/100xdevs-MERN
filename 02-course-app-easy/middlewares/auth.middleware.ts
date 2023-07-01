import { Request, Response, NextFunction } from "express";

import { ADMINS, USERS } from "../controller/user.controller";

interface userData{
    username:string;
    role:string;
    password:string;
}

const isAuthenticated = (req: Request, res: Response, next: NextFunction):Response => {
    try {
        const { username, password } = req.headers;
        console.log(req.headers,"headers");

        const checkAdmin:boolean = ADMINS.some((admin:userData) => admin.username === username && admin.password === password)
        const checkUser:boolean = USERS.some((user:userData) => user.username === username && user.password === password)

        if((checkAdmin || checkUser)){
            next();
        }
        return res.send({message:"You are not logged in"})
        
    }
    catch (err) {
        return res.status(500).send(err)
    }

}

export default isAuthenticated;