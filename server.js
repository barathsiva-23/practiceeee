const express=require('express');
    
const morgan=require('morgan');
const bodyparser = require('body-parser');
const path = require('path');





const app = express();




app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));

app.set('view engine', 'ejs');
app.set('views',path.resolve(__dirname, 'views'));

//load assets
app.use('/css',express.static(path.resolve(__dirname, 'assets/css')));
app.use('/images',express.static(path.resolve(__dirname, 'assets/images')));
app.use('/js',express.static(path.resolve(__dirname, 'assets/js')));


app.use('/',require('./server/routes/router'))


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });