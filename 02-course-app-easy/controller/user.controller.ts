import { Request, Response } from 'express';

// interface admins {
//     username: string;
//     password: string;
// }

let ADMINS = [];
let USERS = [];

const signUpAdmin = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, password, role } = req.body;
        const roleUser = role.toLowerCase();
        const checkUser = ADMINS.some((admin) => admin.username === username) || USERS.some((user) => user.username === username);
        if (checkUser) {
            return res.status(200).send({ message: "user already exists" });
        }
        if (roleUser === "admin") {
            ADMINS.push({ username, roleUser, password });
            return res.send({ message: "Admin successfully created " });
        }
        else if (roleUser === "user") {
            USERS.push({ username, roleUser, password });
            return res.send({ message: "User successfully created " });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "error" });
    }
}

const loginAdmin = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, password } = req.body;
        ADMINS.map((admin) => {
            if (admin.username === username && admin.password === password) {
                res.header("username",admin.username);
                res.header("password",admin.password);
                return res.send({ message: "logged in " })
            }
        }
        )
        return res.send({ message: "user not found" })

    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ message: "error" });
    }
}

export { signUpAdmin, loginAdmin };
