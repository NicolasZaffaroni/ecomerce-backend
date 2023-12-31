
import express from "express"
import router from "/Users/nicozaffaroni95/Desktop/Proyectos/Ecommerce-Backend/src/routes/index.js"
import handlebars  from "express-handlebars";



const app = express()


app.use(express.json())
app.use(express.static(process.cwd() + '/src/public'))


app.engine('handlebars',handlebars.engine());
app.set('view engine','handlebars')
app.set('views',process.cwd() + '/src/views')



//Encontrar ruta 
// console.log(process.cwd())




router(app)

export default app