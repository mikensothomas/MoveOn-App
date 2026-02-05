import type { Request, Response } from "express"
import { Router } from "express"
import { insertDataUsersControllers } from "../controllers/user/user.register.controller.js"
import { editUsersControllers } from "../controllers/user/user.edit.controller.js"
import { deleteUserController } from "../controllers/user/user.delete.controller.js"
import { listUserControllers } from "../controllers/user/user.list.controller.js"
import { loginUserController } from "../controllers/login/login.controller.js"
import { upload } from "../cloudinaryPath/uploads.js"
import { registerMotocyclistCntroller } from "../controllers/motocyclist/register.motocyclist.controller.js"

export const router = Router()

router.get("/", (_: Request, res: Response) => {
    res.json({ message: "Hello App" })
})

router.post("/upload", upload.single("image"), (req, res) => {
    try {
        return res.json({
            url: req.file?.path,
            id: req.file?.filename,
        });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao enviar imagem" });
    }
});

router.post("/registerUser", insertDataUsersControllers)
router.put("/editUsersControllers/:id", editUsersControllers.editUser)
router.delete("/deleteUser/:id", deleteUserController.deleteUser)
router.get("/userList", listUserControllers.userList)
router.post("/login", loginUserController.loginUser)
router.post("/registerMotocyclist", upload.single("cnh_picture"), registerMotocyclistCntroller.registerMotocyclist)