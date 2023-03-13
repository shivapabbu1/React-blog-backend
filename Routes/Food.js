const express=require('express');
const foodapi=require('../Api/Food')


const food=express.Router();

food.route('/Food',).get(foodapi.apiController)


module.exports=food;