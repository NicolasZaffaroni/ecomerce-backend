
import express from "express"

import router from "./routes/index.js"


const app = express()
//Encontrar ruta 
// console.log(process.cwd())

app.use(express.json())
app.use(express.static('/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend'+'/src/public'))

router(app)

export default app