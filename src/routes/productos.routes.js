import { Router } from "express";
import {
  borrarProducto,
  crearProductos,
  editarProducto,
  listarProductos,
  obtenerProductos,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage("El nombre debe tener entre 2 y 100 caracteres"),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage('El dato debe ser numerico')
        .custom((value)=>{
            if(value >=1 && value <= 10000){
                return true
            }else{
                throw new Error('El precio debe estar entre 1 y 10000')
            }
        }),
        check("categoria")
        .notEmpty()
        .withMessage("La categoria es obligatorio"),
        check("imagen")
        .notEmpty()
        .withMessage("La URL de la imagen es obligatoria")
    ],
    crearProductos
  );
router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(
    [
      check("nombreProducto").notEmpty.withMessage("El nombre del producto es obligatorio"),
      check("categoria").notEmpty.withMessage("La categoria es obligatoria"),
      check("precio").notEmpty().withMessage("El precio es obligatorio"),
      check("imagen").notEmpty().withMessage("La URL de la imagen es obligatoria")
    ],
    editarProducto)
  .delete(borrarProducto);

// app.get('/prueba',(req, res)=>{
//     res.send('esto es una prueba de una peticion get')
// });

// app.delete('/pruebados',(req, res)=>{
//     res.send('esto es una prueba de una peticion delete')
// });
export default router;
