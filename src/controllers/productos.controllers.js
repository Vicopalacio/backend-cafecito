export const listarProductos = (req, res) => {
    res.send("esto es una prueba de una peticion get");
  }

export const crearProductos = (req, res) => {
    console.log(req.body)
    //tomar body y validarlo
    //guardar ese objeto del body en la base de datos
    res.send("aqui tengo que crear un producto");
  }