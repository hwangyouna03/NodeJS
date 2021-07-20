//웹서버 객체 만들기
const http= require('http');
const server = http.createServer();
//웹서버 실행
server.listen(3000,()=>{
    console.log('Running Http Server at Localhost.....')
})

//1. 사용자 접속 이벤트 처리 사용자가 접속했습니다. 출력
//객체.on('connection',콜백함수)
server.on('connection',(socket)=>{
    console.log('사용자가 접속하였습니다.')
})

//2. 사용자 요청 이벤트 처리 사용자의 요청이 들어왔습니다. 출력
server.on('request', (req,res)=>{
    console.log('사용자 요청이 들어왔습니다.')
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"})
    res.write("<html><head><title></title><body>");
    res.write("Hello Nodejs~!");
    res.write("</body></html>");
    res.end(); //응답을 모두 보냄 호출될 때 사용자로 응답을 전송한다.
})