//객체 만들기
let calc={}; 

//add함수 속성 추가(a,b)
calc.add=(a,b)=>{
    return a+b;
}

module.exports=calc; //modul.exports에 담겨져서 내보내진다.
//객체를 다른 사람들이 사용할 수 있게 내보냈음

module.exports=function(a,b){ //원래는 exports할 때 객체를 넣지만 함수도 가능
    return a+b;
}
//결론 함수는 == 객체이다