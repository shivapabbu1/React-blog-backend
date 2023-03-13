const express =require('express')
const hollywoodapi=require('../Api/Hollywood')


const hollywood=express.Router();

hollywood.route('/Hollywood',).get(hollywoodapi.apiController)


module.exports=hollywood;