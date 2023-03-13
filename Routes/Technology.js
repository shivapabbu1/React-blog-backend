const express=require('express');

const techno=require('../Api/Technology')

const tech=express.Router();

tech.route('/Technology',).get(techno.apiController);

module.exports= tech;

