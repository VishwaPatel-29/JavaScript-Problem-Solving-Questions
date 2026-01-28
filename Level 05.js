//1st Que -> Count Words in a Sentence : 
let str = "          Hello          World      ";
let count = 0;
for(let i = 0; i < str.length; i++){
    if(i == 0 && str[i] != " "){
        count++;
    }
    else if(str[i] != " " && str[i - 1] == " "){
        count++;
    }
}
console.log(count);

//2nd Que -> Replace All 'a' with 'e' : 
//1st Approach :
let str1 = "Apple";
res = str1.replace("a","e").replace("A","E");
console.log(res);

//2nd Approach :
let str2 = "Apricot";
let res1 = str2.replaceAll("a","e").replace("A","E");
console.log(res1);

//3rd Approach :
let str3 = "Banana";
let res2 = "";
for(let i = 0;i<str3.length;i++){
    if(str3[i] == "a" || str3[i] == "A"){
        res2=res2+"e";
    }
    else{
        res2=res2+str3[i];
    }
}
console.log(res2);

//3rd Que -> Check if String Contains Character : 
let str4 = "Banana";
let ch = "a";

console.log(str4.includes(ch));

for(let i = 0; i < str4.length; i++){
    if(str4[i] == ch){
        console.log(true);
        return;
    }
}
console.log(false)

//4th Que -> Compare Two Strings :
let str5 = 123;
let str6 = "123";
console.log(str6.includes(str5));

//5th Que -> Count Digits in a String :
let str7 = "ABC 123";
let count1 = 0;
for(let i = 0;i < str7.length;i++){
    if(str7[i] >= "0" && str7[i] <= "9"){
        count1++;
    }
}
console.log(count1);

//6th Que -> Count UpperCase Latters :
//1st Approach :
let str8 = "HV";
let count2 = 0; 
for(let i = 0;i < str8.length;i++){
    if(str8[i] >= "A" && str8[i] <= "Z"){
        count2++;
    }       
}
console.log(count2);

//2nd Approach :
let str9 = "HV";
let count3 = 0;
for(let i = 0;i < str9.length;i++){
    let ascii = str9.charCodeAt(i);
    if(ascii >= 65 && ascii <= 90){
        count3++;
    }
}
console.log(count3);

//7th Que -> Count LowerCase Latters :
//1st Approach :
let str10 = "hv";
let count4 = 0;
for(let i = 0; i < str10.length;i++){
    if(str10[i] >= "a" && str10[i] <= "z"){
        count4++;
    }
}
console.log(count4);

//2nd Approach :
let str11 = "hv";
let count5 = 0;
for(let i = 0; i < str11.length;i++){
    let ascii = str11.charCodeAt(i);
    if(ascii >= 97 && ascii <= 122){
        count5++;
    }           
}
console.log(count5);

//8th Que -> Remove All Vowels From a String :
//1st Approach :
let str12 = "ApplE";
let res3 = "";
for(let i = 0;i < str12.length;i++){
    if(str12[i] != "a" && str12[i] != "e" && str12[i] != "i" && str12[i] != "o" && str12[i] != "u" && str12[i] != "A" && str12[i] != "E" && str12[i] != "I" && str12[i] != "O" && str12[i] != "U"){
        res3 = res3 + str12[i];
    }   
}
console.log(res3);

//2nd Approach :
let str13 = "Apple";
let res4 = "";
for(let ch of str13){
    if(ch=="A" || ch=="a" || ch=="E" || ch=="e" || ch=="I" || ch=="i" || ch=="O" || ch=="o" || ch=="U" || ch=="u"){
        continue;
    }
    else{
        res4=res4+ch;
    }
}   
console.log(res4);

//3rd Approach :
let str14 = "Apple";
let res5 = "";
for(let ch of str14){
    if(!str14.includes(ch)){
        res5=res5+ch;
    }
}
console.log(res5);

//9th Que -> Remove All Digits From a String :
//1st Approach :
let str15 = "HV529";
let res6 = "";
for(let i = 0;i < str15.length;i++){
    if(str15[i] < "0" || str15[i] > "9"){
        res6 = res6 + str15[i];
    }   
}
console.log(res6);

//2nd Approach :
let str16 = "HV529";
let res7 = "";
for(let i = 0;i < str16.length;i++){
    if(!(str16[i] >= "0" && str16[i] <= "9")){
        res7=res7+str16[i];
    }
}
console.log(res7);

//10th Que -> Toggle Case of Each Character :
let str17 = "AppLE";
let res8 = "";
for(let i = 0;i < str17.length;i++){
    if(str17[i] >= "A" && str17[i] <= "Z"){
        res8 = res8+str17[i].toLowerCase();
    }
    else{
        res8 = res8+str17[i].toUpperCase();
    }
}
console.log(res8);

//2nd Approach :

let str18 = "AppLE";
let res9 = "";
for(let i = 0; i < str18.length;i++){
    let ascii = str18.charCodeAt(i);
    if(ascii >= 65 && ascii <= 90){
        ascii = ascii + 32;
    }
    else if(ascii >= 97 && ascii <= 122){
        ascii = ascii - 32;
    }
    res9 = res9 + String.fromCharCode(ascii);
}
console.log(res9);

//3rd Approach :
let str19 = "AppLE";
let res10 = "";
for(let i = 0;i<str19.length;i++){
    if(str19[i] == str19[i].toUpperCase()){
        res10 = res10 + str19[i].toLowerCase();
    }   
    else{
        res10 = res10 + str19[i].toUpperCase();
    }
}
console.log(res10);
