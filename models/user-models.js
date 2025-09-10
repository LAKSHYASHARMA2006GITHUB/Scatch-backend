const mongoose = require('mongoose');
import { Schema } from './../node_modules/mongoose/types/index.d';



const userSchema = mongoose.Schema({

    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isadmin: Boolean,
     orders: {
      type: Array,
     default: [],
    },
    contact: Number,
    picture: String, l
}) ;

module.exports = mongoose.model("user",userSchema);
