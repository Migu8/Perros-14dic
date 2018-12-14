require('dotenv').config();

const mongoose = require('mongoose')
const Perro = require('../models/Dog')
mongoose.connect('mongodb://admin:admin123@ds139675.mlab.com:39675/perritos')


const perros =[    
  {
  "breed":"Hound",
  "image":"https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "size":"Large"    },
{
  "breed":"African",
  "image":"https://images.dog.ceo/breeds/african/n02116738_10024.jpg",
  "size":"Medium"    },
{
  "breed":"Basenji",
  "image":"https://images.dog.ceo/breeds/basenji/n02110806_1013.jpg",
  "size":"Medium-Large"    },
{
  "breed":"Chihuahua",
  "image":"https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg",
  "size":"Extra-Small"    },
{
  "breed":"Husky",
  "image":"https://images.dog.ceo/breeds/husky/20180901_150234.jpg",
  "size":"Medium-Large"    },
{
  "breed":"Boxer",
  "image":"https://images.dog.ceo/breeds/boxer/IMG_0002.jpg",
  "size":"Large"    },
{
  "breed":"Corgi",
  "image":"https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10077.jpg",
  "size":"Small"    },
{
  "breed":"Pekinese",
  "image":"https://images.dog.ceo/breeds/pekinese/n02086079_10059.jpg",
  "size":"Small"    },
{
  "breed":"Pomeranian",
  "image":"https://images.dog.ceo/breeds/pomeranian/n02112018_10129.jpg",
  "size":"Large"    },
{
  "breed":"Redbone",
  "image":"https://images.dog.ceo/breeds/redbone/n02090379_1006.jpg",
  "size":"Large"    }
]

Perro.create(perros)
.then(dogs=>{
  console.log(`${dogs.length} dogs added`)
  mongoose.connection.close()
})
.catch(e=>{
  console.log('Something went wrong' +e)
})