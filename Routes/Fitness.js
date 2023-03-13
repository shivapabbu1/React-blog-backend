const express=require('express');
const fitnessapi=require('../Api/Fitness')


const fitness=express.Router();

fitness.route('/Fitness',).get(fitnessapi.apiController)


module.exports=fitness;