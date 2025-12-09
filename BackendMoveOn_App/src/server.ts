import express, { type Application } from "express"
import dotenv from "dotenv"
import { router } from "./routers/routes.js"
import { run } from "./models/db/connection.js"
dotenv.config()

const port = process.env.PORT

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.middlewares()
        this.router()
        this.startServer()
    }

    middlewares() {
        this.app.use(express.json())
    }

    router(){
        this.app.use(router)
    }

    startServer() {
        this.app.listen(port, ()=> {
            console.log("App running at", port)
        })

        run()
    }
}

export default new App().app