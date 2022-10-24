import { Router } from "express";
import { crearProductos, listarProductos } from "../controllers/productos.controllers";

const router = Router();

router.route("/productos").get(listarProductos).post(crearProductos);

// app.get('/prueba',(req, res)=>{
//     res.send('esto es una prueba de una peticion get')
// });

// app.delete('/pruebados',(req, res)=>{
//     res.send('esto es una prueba de una peticion delete')
// });
export default router;