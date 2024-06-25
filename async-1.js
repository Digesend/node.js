function displayA(){
    console.log("A");
}

function displayB(){
    setTimeout(()=>{    // 2초 후에 실행되도록 설정
        console.log("B");
    },2000);
}

function displayC(){
    console.log("C");
}

displayA();
displayB();
displayC();
// 비동기의 경우 동기처럼 A->B->C 순으로 행해지는 것이 아니라 오래 걸리는 B는 나중에 해결된다.
