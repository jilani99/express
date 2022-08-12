//import express
const express=require('express')

//associate the express variable to a variable
const app=express() 

//create the variable port
const port = 8000;


// //passer des fichiers statiques % folder "public"
app.use(express.static('public'));


//Middelware for the time server 

// const currentHour= new Date();
// app.get('/', function(req, res){ (currentHour.getHours() < 10|| currentHour.getHours() > 17) ? 
// res.send('Oooops the website is not available from 9a.m to 5p.m from Monday to Friday')
// :
// res.send('Hello');
// next();
// });
app.listen(8000);





//listen to the port
//app.listen(port, (err)=> {err? console.log(err) : console.log('the server is running on port 8080')});
