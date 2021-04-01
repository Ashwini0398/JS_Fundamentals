//Closure in action that is inner function can have access to the outer function varables as well as all the global varables
//closure is the combination of a function and the lexical enviroment within which that function was declared



const outerFun = (a) => {
    let b = 10;

    const innerFun = () =>{
        let sum = a + b ;
        console.log(`the sum of two no is ${sum}`);
    }

     return innerFun;
}

let inner = outerFun(5);

console.dir(inner);

inner();