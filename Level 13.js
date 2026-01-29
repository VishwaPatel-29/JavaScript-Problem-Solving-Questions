//1st Que -> Middle Character of a String :
function middle(str){
    let length=str.length;
    let mid = Math.floor(length/2);
    if(length%2 == 0){
        console.log(str[mid-1]+str[mid]);
    }
    else{
        console.log(str[mid])
    }
}
middle("Vishwa");

//2nd Que -> Starts with 'a':
function a(a){
    let length=a.length;
    if(a[0] == "a" || a[0] =="A"){
        console.log("True");
    }
    else{
        console.log("False");
    }
}
a("Apple");

//3rd Que -> Ends with '!' :
function endsWithExclamation(str){
    if(str[str.length - 1] == "!"){
        console.log(true);
    } else {
        console.log(false);
    }
}
endsWithExclamation("Hello!");

//4th Que -> Count Spaces in String :
function countSpaces(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == " "){
            count++;
        }
    }
    console.log(count);
}
countSpaces("   Hello  ");

//5th Que -> Remove Leading and Trailing Spaces :
//1st Approach :
function spaces(str) {
    return str.trim();
}

console.log(spaces("  hello  ")); 

//2nd Approach :
function space(b){
    let i = 0;
    let j = b.length-1;
    while(b[i] == " "){
        i++;
    }
    while(b[j] == " "){
        j--;
    }
    let res ="";
    for(let k = i; k <= j; k++){
        res=res+b[k];
    }
    console.log(res);
}
space("  Hello ");

//6th Que -> Replace All '?' with '!' :
function replaceQ(str){
    console.log(str.replaceAll("?", "!"));
}
replaceQ("Hello?");

//7th Que -> Join two strings with a space:
function joinStrings(a, b){
    console.log(a + " " + b);
}
joinStrings("Hello", "Vishwa");

// 8th Que -> First word of a sentence:
function firstWord(str){
    let word = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] == " ") break;
        word += str[i];
    }
    console.log(word);
}
firstWord("JavaScript is fun");

//9th Que -> Last word of a sentence:
function lastWord(str){
    let word = "";
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] == " ") break;
        word = str[i] + word;
    }
    console.log(word);
}
lastWord("JavaScript is fun");

//10th Que -> Length of Longest Word in a Sentence :
//1st Approach :
function longestWord(str){
    let res=[];
    let count = 0;
    for(let i = 0; i < str.length;i++){
        if(i == str.length-1 && str[i] != " "){
            count++;
            res.push(count);
        }
        else if(str[i] == " "){
            if(count>0){
                res.push(count);
                count = 0;
            }
        }
        else{
            count++;
        }
    }
    console.log(Math.max(...res));
}
longestWord("This is Javascript    Class");

//2nd Approach:
function longestWordLength(str){
    let maxLen = 0;
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] != " "){
            count++;
        } else {
            if(count > maxLen) maxLen = count;
            count = 0;
        }
    }
    if(count > maxLen) maxLen = count;

    console.log(maxLen);
}
longestWordLength("This is Javascript    Class");

//11th Que -> Shortest Word in a Sentence :
//1st Approach :
function shortWord(str1){
    let words = str1.split(" ");
    let shortest = words[0];
    for(let word of words){
        if(word.length < shortest.length){
            shortest = word;
        }
    }
    return shortest;
}
console.log(shortWord("This is Javascript Class"));

//2nd Approach :
function shortWord(str2){
    let res=[];
    let count1 = "";
    for(let i = 0; i < str2.length; i++){
        if(i == str2.length && str2[i] != " "){
            count1 = count1+str2[i];
            res.push(count1);
        }
        else if(str2[i] == " "){
            if(count1.length > 0){
                res.push(count1);
                count1 = " ";
            }
        }
        else{
            count1=count1+str2[i];
        }
    }
    let min = Infinity;
    let minWord = "";
    for(let i = 0; i < res.length; i++){
        if(res[i].length < min){
            min=res[i].length;
            minWord=res[i];
        }
    }
    console.log(minWord);
}
shortWord("This is Class");

//12th Que -> Count 'the' as a whole word :
let str3 = "THE cat and the dog";
let count = 0;
for(let i = 0; i < str3.length; i++){
    if((i == 0 || str3[i-1] == " ") && str3[i] == "t" && str3[i+1] == "h" && str3[i+2] == "e"|| str3[i] == "T" && str3[i+1] == "H" && str3[i+2] == "E" && ((i==str3.length-1) || str3[i+3] == " ")){
        count++;
    }
}
console.log(count);

//13th Que -> Contains Any Vowels :
let str5 = "This is THE First Lecture";
let checStr = "AEIOUaeiou";

for(let i = 0; i < str5.length; i++){
    if(checStr.includes(str5[i])){
        console.log(true);
        return;
    }
}
console.log(false);

//14th Que -> Contains Only Digits :
//1st Approach :
function allDigits(str6){
 let checkStr="0123456789";
 for(let i = 0; i < str6.length; i++){
    if(!(checkStr.includes(str6[i]))){
        console.log(false);
        return;
    }
 }
 console.log(true);
}
allDigits(15);

//2nd Approach :
function allDigits1(str7){
for(let i = 0; i < str7.length; i++){
    if(str7[i] >= "0" && str7[i] <= "9"){
        countinue;
    }
    else{
        console.log(false);
        return;
    }
 }
 console.log(true);
}
allDigits1(15);

//15th Que -> Contains Only Letters :
function allChar(str8){
    for(let i = 0; i < str8.length; i++){
        if((str8[i]>="a" && str8[i]<="z") || (str8[i] >= "A" && str8 <= "Z")){
            continue;
        }
        else{
            console.log(false);
            return;
        }
    }
    console.log(true);
}
allChar("Hhterdfgb");

//16th Que -> Repeat Each Character Twice :
function repeatChar(str9){
    let res = "";
    for(let i = 0; i < str9.length;i++){
        res=res+str9[i]+str9[i];
    }
    console.log(res);
}
repeatChar("Vishwa");

//17th Que -> Remove Special Character :
function remSpec(str10){
    let res="";
    for(let i = 0; i < str10.length; i++){
        let char = str10[i];
        if((char>=0 && char<=9) || (char>='a' && char<='z') || (char>='A' && char<= 'Z')){
            res=res+str10[i];
        }
    }
    console.log(res);
}
remSpec("he@45tyg");

//18th Que -> Count Words With Length >= 5 :
function countLength(str11){
    let count3 = 0;
    let length = 0;
    for(let i = 0; i < str11.length; i++){
        if(i == str11.length-1 && str11[i] != " " && length >= 4){
            count3++;
        }
        else if(str11[i] != " "){
            length++;
        }
        else{
           if(length >= 5){
               count3++;
           }
           length = 0;
        }
    }
    console.log(count3);
}
countLength("Hello Vishwa Here");

//19th Que -> Anagram Check - Two Strings are anagram if they use same letters in same count :
//1st Approach :
function anaCheck(str12,str13){
    let arr1 = str12.split(" ");
    arr1.sort();
    let arr2 = str13.split("");
    arr2 = arr2.sort();
    str12=arr1.join("");
    str13=arr2.join("");
    if(str12 === str13){
        console.log("Anagram");
    }
    else{
        console.log("Not an Anagram");
    }
}
anaCheck("Hello","olleH");

//2nd Approach : 
function anagram(str14,str15){
    let obj1 = {};
    let obj2 = {};
    
    for(let char of str14){
        if(char = " "){
            continue;
        }
        if(obj1[char]){
            obj1[char]++
        }
        else{
            obj1[char] = 1;
        }
    }
    
    for(let char of str15){
        if(char == " "){
            continue;
        }
        if(obj2[char]){
            obj2[char]++;
        }
        else{
            obj2[char] = 1;
        }
    }
    
    for(let char in obj1){
        if(obj1[char] != obj2[char]){
            console.log("Not Anagram");
            return;
        }
    }
    console.log("Anagram");
    
    for(let char in obj2){
        if(obj1[char] != obj2[char]){
            console.log("Not Anagram");
            return;
        }
    }
    console.log("Anagram");
}
anagram("Hello","olleH");

//20th Que -> Pangram Check : 
function panagram(str16){
    let pan = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < str16.length; i++){
        if(!(pan.includes(str16[i]))){
            console.log("Not Pangram");
            return;
        }
    }
    console.log("Pangram");
}
panagram("qwertyuioplkjhgfdsazxcvnbnm");