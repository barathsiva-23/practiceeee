const express=require('express')
const route = express.Router()
const services = require('../services/render')
// const controller = require('../controller/controller');
route.get('/',services.homeRoutes)


module.exports =route