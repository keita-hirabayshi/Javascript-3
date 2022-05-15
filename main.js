// function hello(callback,lastname){
            // 関数そのもの
    // console.log('hello' + callback(lastname));
// }
// 関数の引数として、関数を使用できる。このような関数をコールバック関数と呼ぶ。

// callback関数を変数として使用する場合、引数部分において()をつけてはいけない
// callback()としてしまうと、意味合い的に関数を実行することを意味してしまうため


// function getName(){
//     return 'Code Mafia';
// }
// 流れ　
// hello関数にgetName関数を渡す　→ console内に渡されたgetName関数が実行され、出力される
// hello((name)=>{
//     return'Code' + name;
// },'Mafia');
// 引数に無名関数をそのまま引数として渡すやり方もある。

function doSomething(a,b,callback){
    const result = callback(a,b);
    console.log(result);
}

function multiply(a,b){
    return a * b ;
}

function plus(a,b){
    return a + b;
}
doSomething(2,2,multiply);
doSomething(7,7,plus);


// 自作の部分
function todolists(a,b,callback){
    const todolist = callback(a,b);
    console.log('私は' + todolist);
}

function dreame(a,b){
    return '死ぬまでに' + a + 'にある' + b + 'へ行ってみたい';
}
todolists('トルコ','カッパドキア',dreame);