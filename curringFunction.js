//curring function in this we can use function multuple times 



function multiply(number){
     return numB => {
         return numB * number;
     }
 }

 const multiplyByFive = multiply(5);

 console.log(multiplyByFive(2));
 console.log(multiplyByFive(4));
 console.log(multiplyByFive(5));

