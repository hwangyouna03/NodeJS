//파일처리를 하려면 fs 모듈이 필요함
const fs = require('fs');
fs.readFile("data.txt",'utf8', function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});
//fs.writeFile
//nodejs is server side javascript 를 write.txt에 저장
//콘솔창에는 Saved! 출력

fs.writeFile("write.txt", 'nodejs is', function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Saved!!");
    }
})

