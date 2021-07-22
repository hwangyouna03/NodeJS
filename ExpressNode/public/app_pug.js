const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', './views'); //ejs하고 pug가 view폴더에 저장
//나는 view를 사용하겠다.. 사용하는 템플릿엔진은 views 폴더에 저장할거다.
app.set('view engine', 'pug');
//나는 pug를 사용하겠다.
app.locals.pretty=true; //pug 이쁘게 나오는 것

app.use(express.urlencoded({extended: true})); //만들어놓은 미들웨어를 넣기 않으면 Cannot read property 'uid' of undefined 오류 발생
//사용자가 입력한 데이터를 응답할 대 객체안에 객체를 넣을 수 있도록 하겠다.

// 콜백함수가 다 다름

app.get('/', (req,res)=>{
    res.send("hi pug~"); // 서버에서 클라이언트로 보내주는 메서드
})

app.get("/template", (req, res)=> {
    //template으로 접속했을 때(http://localhost:3000/template), temp라는 pug 파일이 열리게 할꺼야
    res.render("temp");
})

app.get("/login",(req,res)=>{
    res.render("login_form")
})

app.post("/login",(req,res)=>{
    let _uid=req.body.uid;
    let _upass=req.body.upass;
    //아이디가 kim이고 비밀번호가 1111이면 '환영합니다' 출력
    //아니면, login 화면으로
    res.send(`아이디는 ${_uid}이고 비밀번호는 ${_upass}입니다`);
})

// ex) http://localhost:3000/temp?name=kim&password=2222로 접속
app.get('/temp', (req,res) => {
    let _id = req.query.name;
    let _pass = req.query.password;
    res.send(`이름은 ${_id}이고 비밀번호는 ${_pass}입니다`)
})



app.listen(3000, () =>{
    console.log('Running express server at localhost.....');
})