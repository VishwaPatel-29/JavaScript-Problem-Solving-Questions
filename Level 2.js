//1st Que -> Print 1 to 10 in a Row :
let str = " ";
for(let num = 1; num <= 10; num ++){
    str = str+num+" ";
}
console.log(str);

//2nd Que -> Print 1 to n in a Row :
let str1 = " ";
let n = prompt("Enter The Number:");
for(let i = 1; i <= n; i++){
    str1 = str1+i+" ";
}
console.log(str1);

//3rd Que -> Print Even Numbers From 1 to n :
function even(number){
    let str2 = " ";
    for(let i = 1; i <= number;i++){
        if(i % 2 == 0){
            str2 = str2+i+" "
        }
    }
    console.log(str2);
}
even(15);

//4th Que -> Print Odd Numbers From 1 to n :
function odd(number){
    let str2 = " ";
    for(let i = 1; i <= number;i++){
        if(i % 2 == 1){
            str2 = str2+i+" "
        }
    }
    console.log(str2);
}
odd(15);

//5th Que -> Sum from 1 to n :
let n1 = 5;
let sum = 0;
for(let i = 1; i <= n1; i++){
    sum += i;
}
    console.log(sum);

//6th Que -> Product from 1 to n :
function product1toN(N) {
    let product = 1;
    for (let i = 1; i <= N; i++) {
        product *= i;
    }
    return product;
}
console.log(product1toN(8));

//7th Que -> Print Multiplication Table:
function table(n){
    let res = " ";
    for(let i = 1; i <= 10;i++){
        res=res+i*n+" ";
    }
    console.log(res);
}
table(9);

//8th Que -> Count Number Divisible By 3:
function count(n){
    let count = 0;
    for(let i = 1;i <= n;i++){
        if(i % 3 == 0){
            count++;
        }
    }
    console.log(count);
}
count(10);

//9th Que -> Print Factorial:
function factorial(N) {
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial of 5:", factorial(5));

//10th Que -> first n multiples of 7:
function multiples(n){
    let res = " ";
    let count = 0;
    for(let i = 1; i <= n;i++){
        res = res+(7*i)+" "
    }
    console.log(res);
}
multiples(4);