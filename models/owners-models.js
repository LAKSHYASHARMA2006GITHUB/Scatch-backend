const mongoose = require('mongoose');
import { Schema } from './../node_modules/mongoose/types/index.d';

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const ownerSchema = mongoose.Schema({

    fullname: String,
    email: String,
    password: String,
     products: {
      type: Array,
     default: [],
    },
    contact: Number,
    picture: String,
    gstin:String, l
}) ;

module.exports = mongoose.model("owner",ownerSchema);
