const express=require('express');
const bollywoodapi=require('../Api/Bollywood')


const bollywood=express.Router();

bollywood.route('/Bollywood',).get(bollywoodapi.apiController)


module.exports=bollywood;