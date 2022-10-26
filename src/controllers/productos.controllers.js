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

  export const obtenerProductos = async(req, res) => {
    try{
      //extraer el id de la ruta
      console.log(req.params.id)
      //buscar en la base de datos el producto q coincida con ese id
      const productoBuscado = await Producto.findById(req.params.id);
      //cuando lo encuntre al objeto, responder con eso al frontend.
      res.status(200).json(productoBuscado);
    }catch(error){
      console.log(error);
      res.status(404).json({
        mensaje: 'No se encontro el producto buscado'
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

  
  export const editarProducto = async(req,res)=> {
    try{
      //extraer el id del parametro de la ruta y los datos del objeto q quiero editar
      //validar los datos y luego solicitar a la bd actualizar propiamente el producto
      await Producto.findByIdAndUpdate(req.params.id, req.body);
      //responder al frontend con un mensaje
      res.status(200).json({
        mensaje:'Se edito correctamente'
      })
    }catch(error){
      console.log(error);
      res.statys(400).json({
        mensaje:'Error al intentar editar un producto'
      })
    }
  }