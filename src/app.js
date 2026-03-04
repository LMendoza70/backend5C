//importamos la libreria de express
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import gruposRoutes from './routes/grupos.routes.js'

//creamos el objeto de express para nuestra aplicacion 
const app=express();


//configuro el acceso al archivo ,.env
dotenv.config()

//definimos el puerto de coneccion 
const port = process.env.PORT || 3000

//definimos un midleware para poder implementar json en nuestra API
app.use(express.json())
app.use(cors())

//definimos las rutas que voy a implementar
app.use('/api/grupos',gruposRoutes)

app.get('/',(req, res)=>{
    res.send("Esto es mi primer API desde express... publicada en vercel...");
})


app.listen(port,()=>{
    console.log("Prueva el API desde localhost:"+port)
})