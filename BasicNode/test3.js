const myModule={
    name:'kim',
    age:35,
    about:function(){
        console.log(`이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
    }
    //this를 사용할려면 화살표 함수X-> 함수 써야함
}
module.exports=MyModule;
//module.exports={} <=초기값