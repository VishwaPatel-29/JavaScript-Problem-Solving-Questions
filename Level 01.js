//1st Que -> Check if Number is Even or Odd:
var num = 5;
if(num % 2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//2nd Que -> Find the Maximum of 2 Numbers:
let a = 5;
let b = 10;
if(a > b){
    console.log("A is Greater than B");
}
else{
    console.log("B is Greter than A");
}

//3rd Que -> Find Maximum Nnumber of 3 Numbers:
let c = 29;
let d = 10;
let e = 7;
if(c > d && c > e){
    console.log("C is Greater");
}
else if(d > c && d < e){
    console.log("D is Greater");
}
else{
    console.log("E is Greater");
}

//4th Que -> Positive,Negative or Zero:
let f = 1;
if(f > 0){
    console.log("F is a Positive Number");
}
else if(f < 0){
    console.log("F is a Negative Number");
}
else{
    console.log("F is Zero");
}

//5th Que -> Age = 8 : child; Age = 15 : Teenager; Age = 25 : Adult
g = 17;
if(g > 0 && g < 12){
    console.log("Child");
}
else if(g >= 13 && g <= 19){
    console.log("Teenager");
}
else{
    console.log("Adult");
}

//6th Que -> 90-100:A;80-89:B;70-79:C;60-69:D;0-59:F :
let h = -8;
switch(true){
    case (h >= 90 && h <= 100) : 
        console.log("Grade:A");
        break;
    case (h >= 80 && h <= 89) : 
        console.log("Grade:B");
        break;
    case (h >= 70 && h <= 79) : 
        console.log("Grade:C");
         break;
    case (h >= 60 && h <= 69) : 
        console.log("Grade:D");
        break;
    case (h >= 0 && h <= 59) :
        console.log("Grade:F");
         break;
    default: 
    console.log("Please Enter Valid Marks!");
    break;
}

//7th Que -> Check Number is divisible by 5 :
//1st Approach :
let i = 5;
if(i % 5 == 0){
    console.log("The Number is Divisible By 5");
}
else{
    console.log("The Number is Not Divisible By 5");
}

//2nd Approach:
function divby5(n){
    console.log(n%5==0? "Number is Divisible By 5" : "Number is Not Divisible By 5");
}

divby5(20)
divby5(18)

//8th Que -> Check the Number is Divisible By 3 and 5 Both :
let j = 9;
if(j % 3 == 0 && j % 5 == 0){
    console.log("The Number is Divisible by 3 and 5 Both");
}
else{
    console.log("The Number is Not Divisible by Both");
}

//9th Que -> Check The Year Is Leap Year :
function leap(){
    let year = prompt("Enter Year:");
    if(year % 400 == 0){
        console.log("This is a Leap Year");
    }
    else{
        console.log("This is Not a Leap Year");
    }
}
leap();

//10th Que -> In Range 10-50 :
let k = 49;
if(k <= 50 && k >= 10){
    console.log("The Number is in The Range");
}
else{
    console.log("The Number isn't in The Range");

}
