const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  name:String,
  email:String
},{
  timestamps:true
})

userSchema.plugin(plm, {usernameField: 'email'})

module.exports = mongoose.model('User', userSchema)