//1st Que -> Multiple of 10 :
function multiple(n){
    return n%10 == 0;
}
console.log(multiple(5,29));

//2nd Que -> Minimum of Three Numbers :
function min(v,h){
    return Math.min(v,h);
}
console.log(min(5,29));

//3rd Que -> Minimum of Three Numbers :
function min(a,b,c){
    return Math.min(a,b,c);
}
console.log(min(5,29,15));

//4th Que -> Print from n Down to 1 :
function print(d){
    let beg ="";
    for(let i = d; i >= 1;i--){
        beg = beg+i+" " 
    }
    console.log(beg);
}
print(5);

//5th Que -> Sum of All Even Numbers From 1 to n :
function sumEven(e){
    let sum = 0;
    for(let i = 0; i <= e;i++){
        if(i%2==0){
            sum = sum+i;
        }
    }
    console.log(sum);
}
sumEven(5);

//6th Que -> Sum of All Odd Numbers From 1 to n :
function sumEven(f){
    let sum = 0;
    for(let i = 0; i <= f;i++){
        if(i%2!=0){
            sum = sum+i;
        }
    }
    console.log(sum);
}
sumEven(5);

//7th Que -> Count Numbers Divisible By 2 or 3 :
function divisible(g){
    let count = 0;
    for(let i = 0; i < g; i++){
        if(i % 2 == 0 && i % 3 == 0){
            count++;
        }
    }
    console.log(count);
}
divisible(18);

//8th Que -> Count Numbers Divisible By 2 or 5 :
function divisible(h){
    let count = 0;
    for(let i = 0; i < h; i++){
        if(i % 2 == 0 && i % 5 == 0){
            count++;
        }
    }
    console.log(count);
}
divisible(50);

//9th Que -> Perfect Number :
function perfectNumber(k){
    let sum1 = 0;
    for(let i = 0; i < k; i++){
        if(k%i == 0){
            sum1 = sum1+i;
        }
    }
    console.log(k == sum1 ? "Perfect Number" : "Not a Perfect Number");
}
perfectNumber(6);

//10th Que -> Co-Prime Number :
function coPrime(l,m){
    let range = Math.min(l,m);
    let GCD;
    for(let i = range; i >= 1; i--){
        if(l%i == 0 && m%i == 0){
            GCD = i;
        }
    }
    console.log(GCD == 1 ? "Co-Prime" : "Not a Co-Prime" );
}
coPrime(8,15);

//11th Que -> Largest Digit in a Number :
//1st Approach :
function digit(o){
    let arr = String(o).split("");
    let res = Math.max(...arr);
    console.log(res);
}
digit(1529);

//2nd Approach :
function ld(p){
    let max = 0;
    while(p>0){
        max = Math.max(max,p%10);
        p=Math.floor(p/10);
    }
    console.log(max);
}
ld(1529);

//12th Que -> Smallest Digit in a Number :
function small(q){
    let min = 0;
    while(q>0){
        min = Math.min(min,q%10);
        q=Math.floor(q/10);
    }
    console.log(min);
}
small(1529);

//13th Que -> Count Even Digits in a Number :
function ev(r){
    let count1 = 0;
    while(r>0){
        if(r%2 == 0 && r%10 != 0){
            count1++;
        }
        r=Math.floor(r/10);
    }
    console.log(count1);
}
ev(529);

//14th Que -> Count Odd Digits in a Number :
function odd(t){
    let count2 = 0;
    while(t>0){
        if(t%2 == 0 && t%10 != 0){
            count2++;
        }
        t=Math.floor(t/10);
    }
    console.log(count2);
}
odd(5,29);

//15n Que -> Absolute Difference of Two Numbers :
function diff(u,v){
    return Math.abs(u-v);
}
console.log(diff(15,5));

//16th Que -> Is 3 Digit Number :
// function IsBetween(w){
//     let count3 = 0;
//     while(w>0){
//         count3++;
//         w=Math.floor(w/10);
//     }
//     console.log((count3 == 3));
//         }
//         IsBetween(100);

//17th Que -> Sum of Squares 1^2+2^2+...+n^2 :
function square(a){
    let sum = 0;
    for(let i = 1; i <= a; i++){
        sum=sum+a**2;
    }
    console.log(sum);
}
square(5);

//18th Que -> Sum of Quobes 1^3+2^3+...+n^3 :
function cube(b){
    let sum = 0;
    for(let i = 1; i <= b; i++){
        sum=sum+b**3;
    }
    console.log(sum)
}
cube(3);

//19th Que -> Harshad Number :
function Harshad(c){
    let temp = c;
    let sum = 0;
    while(temp>0){
        sum=sum+temp%10;
        temp=Math.floor(temp/10);
    }
    console.log(c%sum==0)
}
Harshad(10);

//20th Que -> Automorphic Number :
//1st Approach :
function Automorphic(d){
    let square = d*d;
    let nStr = d.toString();
    let squareStr = square.toString();
    return squareStr.endsWith(nStr);
}
console.log(Automorphic(7));

//2nd Approach :
function Auto(e){
    let length=String(e).length;
    let square = e*e;
    let lastDigit = square%(10**length);
    if(lastDigit==e){
        console.log("AutoMorphic Number : ");
    }
    else{
        console.log("Not an AutoMorphic Number : ");
    }
}
Auto(5);