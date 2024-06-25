function displayA(){
    console.log("A");
}

function displayB(callback){
    setTimeout(()=>{    // 2초 후에 실행되도록 설정
        console.log("B");
        callback();
    },2000);
}

function displayC(){
    console.log("C");
}

displayA();
displayB(displayC);
// 이렇게 하면 비동기여도 A->B->C 순으로 실행된다.