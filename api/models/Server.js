const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const productRouter = require("../routes/products.routes")
const connectionMongo = require("../config/db")
// const path = require("path")

class Server {
    constructor() {
        this.PORT = process.env.PORT || 3000
        this.app = express()
        this.middlewares()
    }
    async listen() {
        try {
            await connectionMongo
            this.app.listen(this.PORT, () => {
                console.log(`servidor corriendo en el puerto ${this.PORT}`)
            })

        } catch (error) {
            console.log(error)
        }
    }
    middlewares() {
        //     this.app.use(express.static("public"))
        this.app.use(express.json())
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.routes()
        //     this.app.get("*", (req, res) => {
        //         res.sendFile(path.resolve(__dirname, "../public/index.html"))
        //     })
    }
    routes() {
        this.app.use("/products", productRouter)
    }

}

module.exports = Server