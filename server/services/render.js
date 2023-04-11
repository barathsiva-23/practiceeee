const session=require('express-session');
var nodemailer = require('nodemailer');
var multer=require('multer');
        



exports.homeRoutes=(req, res)=>{
   res.render("mainpage");
     //res.sendFile(__dirname+'/mockup.html');
}