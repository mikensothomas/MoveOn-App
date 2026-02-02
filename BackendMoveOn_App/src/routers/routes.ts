import type { Request, Response } from "express"
import { Router } from "express"
import { insertDataUsersControllers } from "../controllers/user/user.register.controller.js"
import { editUsersControllers } from "../controllers/user/user.edit.controller.js"
import { deleteUserController } from "../controllers/user/user.delete.controller.js"
import { listUserControllers } from "../controllers/user/user.list.controller.js"
import { loginUserController } from "../controllers/user/user.login.controller.js"

export const router = Router()

router.get("/", (_: Request, res: Response) => {
    res.json({ message: "Hello App" })
})

router.post("/registerUser", insertDataUsersControllers)
router.put("/editUsersControllers/:id", editUsersControllers.editUser)
router.delete("/deleteUser/:id", deleteUserController.deleteUser)
router.get("/userList", listUserControllers.userList)
router.post("/login", loginUserController.loginUser)