import express, { type Application } from "express"
import dotenv from "dotenv"
import { router } from "./routers/routes.js"
dotenv.config()

const port = process.env.PORT

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.middlewares()
        this.startServer()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(router)
    }

    startServer() {
        this.app.listen(port, ()=> {
            console.log("App running at", port)
        })
    }
}

export default new App().app