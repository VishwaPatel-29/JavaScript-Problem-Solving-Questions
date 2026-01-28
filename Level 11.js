//1st Que -> Square of a Number :
function square(a){
    return a*a;
}
a = 4;
console.log(a*a)

//2nd Que -> Sum of Two Numbers :
function sum(b,c){
    return b+c;
}
b = 5;
c = 29;
console.log(b+c);

//3rd Que -> Greet By Name : 
function greet(Name){
    return`Hello,${Name}`;
}
console.log(greet("Vishwa"));

//4th Que -> Check Even :
function even(d){
    return d%2 == 0;
}
d = 15;
console.log(even(d));

//5th Que -> Check Odd :
function odd(e){
    return e%2 != 0;
}
e = 15;
console.log(odd(e));

//6th Que -> Is Between 1 and 100 :
function range(f){
    return f>= 1 && f<=100
}
console.log(range(15));

//7th Que -> Is First Number greater Than Second :
function check(){
    return g > h;
}
g = 5;
h = 29;
console.log(check(g,h));

//8th Que -> Is String Length > 5 :
function str(){
    return str.length>5;
}
console.log(str("Vish"));

//9th Que -> First Character of String :
function firstChar(str){
    return str[0];
}
console.log(firstChar("Vishwa"));

//10th Que -> Last Character of String :
function lastChar(str){
    return str[str.length-1]
}
console.log(lastChar("VISH"));

//11th Que -> Longer of Two Strings :
function longer(str1,str2){
    if(str1.length>str2.length){
        return str1;
    }
    else{
        return str1;
    }
}
console.log(longer("Vish","Vishwa"));

//12th Que -> 
function average(i,j,k){
    return(i+j+k)/3;
}
console.log(average(5,29,15));

//13th Que -> 
function sign(l){
    if(l == 0){
        return "Zero:";
    }
    else if(l == Math.abs(l)){
        return "Positive:";
    }
    else{
        return "Negative:";
    }
}
console.log(sign(0,-15,15));

//14th Que -> 
function eligible(age){
    return age>=18 ? "Eligible to Vote" : "Not Eligible to Vote";
}
console.log(eligible(19));

//15th Que -> 
function minutes(hours){
    return hours*60;
}
console.log(minutes(5));

//16th Que -> 
function second(minutes){
    return minutes*60;
}
console.log(second(15));

//17th Que -> Celsius To Feranheit :
function conv(c){
    console.log((c*9/5)+32);
}
conv(0);
conv(25);
conv(100);

//18th Que -> Fernheit To Celsius :
function con(f){
    console.log((f-32)*5/9);
}
con(100);
con(110);
con(150);

//19th Que -> Area of a Triangle :
function area(base,height){
    return 0.5*base*height;
}
console.log(area(5,29));

//20th Que -> Area of a Circle :
function circle(radius){
    return Math.PI*radius*radius;
}
console.log(circle(5));