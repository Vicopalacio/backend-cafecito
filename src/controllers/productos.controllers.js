import { Producto } from "../models/producto";

export const listarProductos = async(req, res) => {
      try{
        //buscar en la base de datos la collection de productos
        // para filtrar por categoria ej const productos = Producto.find({categoria:'Dulce'})
        const productos = await Producto.find();
        //envio la respuesta al frontend
        res.status(200).json(productos);
      }catch(error){
        console.log(error);
        res.status(404).json({
          mensaje: 'Error al buscar los productos'
        })
      }
  }

export const crearProductos = async(req, res) => {
    try{
        console.log(req.body)
        //tomar body y validarlo
        //guardar ese objeto del body en la base de datos
      const productoNuevo = new Producto(req.body);
      await productoNuevo.save();
      res.status(201).json({
        mensaje: 'operacion exitosa'
    })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'ocurrio un error al intentar agregar un producto'
        })
    }
  }