const express = require('express');
const app= express();

// app.use(express.static('public'));
// //static이라는 미들웨어를 사용해 pubic를 /로 지정하는애 
app.use(express.static(__dirname+'/public')); //정적
console.log('__dirname:',__dirname);


app.listen(3000,()=>{
    console.log('Running express server at localhost....')
})