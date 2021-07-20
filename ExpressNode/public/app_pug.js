const express = require('express');
const app= express();


app.use(express.static(__dirname+'/public')); 
app.set('views','./views');
//나는 view를 사용하겠다. 사용하는 템플릿엔진은 views폴더에 저장헐거다
app.set('view engine', 'pug');
//나는 pug를 사용하겠다.
app.locals.pretty = true;

app.use(express.urlencoded({extended:true}));
//응답할 때 객체안에 객체를 삽입해도 되도록 허용

app.get("/",(req,res)=>{
    res.send("hi pug~");
})

app.get("/template",(req,res)=>{
    //template으로 접속했을 때 (http://localhost:3000/template),
    //temp라는 pug파일이 열리게 해보자
    res.render("temp");
})

app.get("/login", (req,res)=>{
    res.render("login_form")
})

app.post("/login", (req,res)=>{
    let _uid = req.body.uid;
    let u_pw = req.body.upw;
    res.send(`아이디는 ${_uid}이고 비밀번호는 ${_upass}`)
})


app.listen(3000,()=>{
    console.log('Running express server at localhost....')
})