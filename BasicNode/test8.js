//웹서버 만들기(4줄)

//사용자 요청 이벤트 처리
//1. 서버의 응답 lion1.png 출력
//2. readFile / writeFile 이용
//3. content-type : image/png

const http = require('http');
const { fstat } = require('node:fs');
const server = http.createServer();

server.listen(3000,()=>{
    console.log("사용자 접속");
})

server.on('request', (req, res)=>{
    console.log('사용자 요청')

    fstat.readFile("lion1.png", (err, result)=>{
        if(err){
            console.log(err);
        }else {
            res.writeHead(200, {"Content-Type": "image/png"})
            res.wirte(result);
            res.end();
        }
    })
})