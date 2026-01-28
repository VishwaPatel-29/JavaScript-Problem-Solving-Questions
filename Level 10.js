//1st Que -> Frequency of Numbers in Array :
//1st Approach :
let arr = [5,29,10,15,17,5];
let freq = {};

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (freq[num]) {
    freq[num]++;
  } else {
    freq[num] = 1;
  }
}

console.log(freq);

//2nd Approach :
let arr1 = [5,29,10,15,17,5];
let obj = {};
for(let n of arr1){
    if(obj[n] == undefined){
        obj[n] = 1
    }
    else{
        obj[n]++;
    }
}
console.log(obj)

//2nd Que -> Most Frequent Number in Array :
//1st Approach :
let arr2 = [5,29,15,29,5,5,17,15];
let freq1 = {};
let maxCount = 0;
let mostFrequent;

for (let i = 0; i < arr2.length; i++) {
  let num = arr2[i];
  freq1[num] = (freq1[num] || 0) + 1;
}

for (let key in freq1) {
  if (freq1[key] > maxCount) {
    maxCount = freq1[key];
    mostFrequent = key;
  }
}

console.log(Number(mostFrequent));

//2nd Approach :
let arr3 = [5,29,10,15,5,5,5];
let obj1 = {};
for(let n of arr3){
    if(obj1[n] == undefined){
        obj1[n] = 1
    }
    else{
        obj1[n]++;
    }
}

let maxCount1 = 0;
let maxValue = 0;

for(let n in obj1){
    if(obj1[n] > maxValue){
        maxCount1 = n;
        maxValue = obj1[n];
    }
}
console.log(maxCount1);

//3rd Que -> Character Frequency in String :
let str = "Hello";
let freq2 = {};

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  freq2[ch] = (freq2[ch] || 0) + 1;
}

console.log(freq2);

//4th Que -> Highest Marks from Array of Student :
let arr4 = [
  {Name:"A",Marks:50},
  {Name:"B",Marks:80},
  {Name:"c",Marks:70}
];
let max = 0;
let std = "";
for(let c of arr4){
    if(c.Marks>max){
      std = c.Name;
      max = c.Marks
    }
}
console.log(std);

//5th Que -> Total Cost from Product Price Object :
let a = {Apple:50 , Banana:20 ,Mango:30};
let sum = 0;
for(let key in a){
  sum += a[key];
}
console.log(sum);

let b = {Pen:10 , Pancil:5};
let total = 0;
for(let key in b){
  total += b[key];
}
console.log(total);

//6th Que -> Average Marks From Subject-Marks Object : 
let c = {Math:80,Science:90,English:70};
let sum1 = 0;
let count1 = 0;
for(let subject in c){
  sum1 += c[subject];
  count1++;
}
let average = count1 == 0 ? 0 : sum1/count1;
console.log(average)

//7th Que -> Print All Keys of Objects :
let obj2 = { a: 1, b: 2, c: 3 };
let keys = [];

for (let key in obj) {
  keys.push(key);
}

console.log(keys); // ["a","b","c"]

//8th Que -> Print all Values Of Objects : 
let x = {a:1,b:2,c:3};
let res3 = [];
for(let char in x){
  res3.push(x[char]);
}
console.log(res3);

//9th Que -> Count Key Value Pairs in Object :
let f = {a:1,b:2,c:3}
let count2 = 0;
for(let g in f){
  count2++;
}
console.log(count2);

//10th Que -> Filter Adults from Array of People :
let m = [
  {Name:"A",Age:18},
  {Name:"B",Age:20},
  {Name:"C",Age:18}
];
for(let char in m){
  if(char.age>18){
    console.log(char)
  }
}