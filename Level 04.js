//1st Que -> Length of String :
let str = "JavaScript";
let count = 0;

while(str[count]){
    count++;
}

console.log(count)

//2nd Que -> Print each Character in new line :
let a = "JavaScript";
for(let i = 0;i < a.length;i++){
    console.log(a[i]);
}

//3rd Que -> Count Vowels :
//1st Approach :
let b = "JAVASCRIPT";
let c = b.toLowerCase();

let obj={
    a:1,
    e:1,
    o:1,
    i:1,
    u:1
}

let count1 = 0;
for(let char of c){
    if(obj[char] == 1){
        count1++;
    }
}
console.log(count1);

//2nd Approach : 
let input = "Hello World";

let vowel = "AEIOUaeiou";

let count2 = 0;

for(let i = 0; i < input.length; i++){
    if(vowel.includes(input[i])){
        count2++;
        console.log(input[i]);
    }
}
console.log(count2);

//3rd Approach :
let input1 = "Hello World";

let count3 = 0;

let str1 = input.toLowerCase();
for(let i = 0; i < str1.length;i++){
    if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u"){
        count3++;
    }
}
console.log(count3);

//4th Que -> Count Constant:
let d = "JavaScript";
let e = d.toLowerCase();

let obj1 = {
    a:1,
    e:1,
    o:1,
    i:1,
    u:1
}

let count4 = 0;
for(let char of e){
    if(obj1[char] != 1){
        count4++;
    }
}
console.log(count4);

//5th Que -> To UpperCase:
//1st Approach :
let h = "vishwa";
let v = h.toUpperCase();
console.log(v)

//2nd Approach:
let str2 = "Hello World";
for(let i = 0;i < str2.length;i++){
    let ascii = str2.charCodeAt(i);
    let char = String.fromCharCode(ascii);
    console.log(char);
}

//3rd Approach:
let str3 = "Hello World";
let res = "";
for(let i = 0; i < str3.length;i++){
    let ascii = str3.charCodeAt(i);
    if(ascii >= 97 && ascii <= 122){
        ascii = ascii-32;
    }
    let char = String.fromCharCode(ascii);
    res = res+char;
}
console.log(res);

//6th Que -> To LowerCase:
//1st Approach :
let f = "VISHWA";
let g = f.toLowerCase();
console.log(g);

//2nd Approach :
let str4 = "VISHWAAAA";
let res1 = "";
for (let i = 0; i < str4.length; i++) {
    let ascii = str4.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
        ascii = ascii + 32;
    }
    let char = String.fromCharCode(ascii);
    res1 = res1 + char;
}
console.log(res1);

//7th Que -> Reverse A String :
//1st Approach : 
let str5 = "JavaScript";
let res2 = str5.split("").reverse().join("");
console.log(res2);  

//2nd Approach :
let str6 = "JavaScrpit";
let res3 = "";
for (let i = str6.length - 1; i >= 0; i--) {
    res3 += str6[i];
}
console.log(res3);

//8th Que -> PalinDrome a String :
//1st Approach :
let str7 = "MadaM";
let isPalindrome = str7 === str7.split("").reverse().join("");
console.log(isPalindrome);

//2nd Approach :
let str8 = "MadaM";
let rev = "";
for (let i = str8.length - 1; i >= 0; i--) {
    rev += str8[i];
}
console.log(str8 === rev);

//9th Que -> Count Occurence Of 'a' :
//1st Approach :
let str9 = "Banana";
let count5 = 0;

for (let i = 0; i < str9.length; i++) {
    if (str9[i] === 'a' || str9[i] === 'A') {
        count5++;
    }
}
console.log(count5);

//2nd Approach :
let str10 = "Apple";
let count6 = 0;

str10 = str10.toLowerCase();
for (let i = 0; i < str10.length; i++) {
    if (str10[i] === 'a') {
        count6++;
    }
}
console.log(count6);

//10th Que -> Remove All Spaces :
//1st Approach :
let str11 = "   Hello    People    ";
let res4 = "";
for(let i = 0; i<str11.length;i++){
    if(str11[i] == " "){
        continue;
    }
    else{
        res4=res4+str11[i];
    }
}
console.log(res4);

//2nd Approach :
let str12 = "    Hello World          ";
let res6 = str12.split(" ").join("");
console.log(res6);
