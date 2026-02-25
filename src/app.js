//importamos la libreria de express
import express from 'express';

//creamos el objeto de express para nuestra aplicacion 
const app=express();
//definimos el puerto de coneccion 
const PORT=3000;

app.get('/',(req, res)=>{
    res.send("Esto es mi primer API desde express...");
})

app.get('/otra/',(req, res)=>{
    res.send("Otra ruta  ");
})

app.listen(PORT,()=>{
    console.log("Prueva el API desde localhost:"+PORT)
})