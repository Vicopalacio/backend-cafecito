import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true,
        minLength:2,
        maxLength: 100
    },
    precio:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    }
});

export const Producto = mongoose.model('producto', productoSchema);

