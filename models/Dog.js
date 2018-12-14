const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({  
  breed:String,
  image:String,
  size:String
},{
  timestamps:true
})


module.exports = mongoose.model('Dog', dogSchema)