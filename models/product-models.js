const mongoose = require('mongoose');
import { Schema } from './../node_modules/mongoose/types/index.d';

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panelColor:String,
    textcolor:String
    
}) ;

module.exports = mongoose.model("products",productSchema);
