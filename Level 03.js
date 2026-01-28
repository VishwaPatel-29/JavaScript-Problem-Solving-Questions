//1st Que -> Count Digits in a Number:
function dig(num){
    num = Math.abs(num);
    let count = num.toString().length;
    console.log(count);
}
dig(-9874);

//2nd Que -> Sum of Digits:
function sum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10); 
    }
    return sum;
}

console.log(sum(123));

//3rd Que -> Product of Digits:
function product(n){
    let product = 1;
    while(n > 0){
        product = product*(n%10);
        n = Math.floor(n/10);
    }
    console.log(product);
}
product(2915);

//4th Que -> Reverse a Number:
function reverseNumber(n) {
  const sign = n < 0 ? -1 : 1;
  const reversed = Math.abs(n).toString().split('').reverse().join('');
  return sign * parseInt(reversed, 10);
}

console.log(reverseNumber(1234));

//5th Que -> PalinDrome Number:
function isPalindrome(n) {
  const str = n.toString();
  const reversed = str.split('').reverse().join('');

  if (str === reversed) {
    return true;  
  } 
  else {
    return false;
  }
}

//6th Que -> Prime Number :
let h = 17;   
let isPrime = true;

if (h <= 1) {
    isPrime = false;
} 
else {
    for (let i = 2; i < h; i++) {
        if (h % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime);

//7th Que -> All Primes From 1 to N:
//1st Approach :
function checkPrime(n){
    for(let i = 2; i <= Math.floor(n/2);i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
function PrintPrime(X){
    let res = [];
    for(let i = 2;i <= X;i++){
        if(checkPrime(i)){
            res.push(i)
        }
    }
    console.log(res.join(" "));
}
PrintPrime(20);

//2nd Approach:
function checkPrime(X){
    for(let i = 2; i <= Math.floor(X/2);i++){
        if(X%i == 0){
            return false;
        }
    }
    return true;
    }
    function main(n){
        let res = [];
        for(let i = 2;i <= n;i++){
            if(checkPrime(i)){
                res.push(i);
            }
        }
    
    console.log(res.join(" "));
        
    }


main(20)

//8th Que -> First n fibbonacci Numbers:
//1st Approach :
let n = 10;
let prev = 0;
let secondPrev = 1;
for(let i = 1;i <= n;i++){
    if(i == 1){
        console.log(0);
        continue;
    }
    if(i == 2){
        console.log(1);
        continue;
    }
    console.log(prev + secondPrev);
    let check = prev+secondPrev;
    prev = secondPrev;
    secondPrev = check;
}

//2nd approach:
function main(n){
    for(let i = 0;i < n;i++){
        console.log(fib(i));
    }
}
function fib(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
main(10)
   

//9th Que -> GCD of two numbers:
let f = 33;
let s = 11;

let smallest = Math.min(f,s);

for(let i = smallest;i >= 1;i--){
    if(f % i == 0 && s % i == 0){
        console.log(i);
        return;
    }
}

//10th Que -> LCM of two numbers:
let a = 20;
let b = 44;

let largest = Math.max(a,b);

for(let i = largest;i <= a*b;i++){
    if(i % a == 0 && i % b == 0){
    console.log(i);
    return;
    }
}
