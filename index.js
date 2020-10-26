const express= require('express');
const app= express();
let fs= require('fs')



app.use(express.static(__dirname+'/public'));


app.listen('81', function() {
  console.log('Servidor web escuchando en el puerto 80');
});



