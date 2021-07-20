console.log('A');

setTimeout(()=>{
    console.log('c');
    console.log('d');
},0) //0초가 지난후에 콜백함수를 실행해라
console.log('B');

//출력 a-b-c-d 순서대로 출력됨