import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/cafecito';
//const url = 'mongodb://127.0.0.1:27017/cafecito';

mongoose.connect(url);

const conexion = mongoose.connection;

conexion.once('open', ()=>{
    console.log('base de dato conectada');
})