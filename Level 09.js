//1st Que -> Square Pattern of * of size N :
let a = Number(prompt("Enter a Number : "));
for(let i = 0; i < a ; i++){
    let b = "";
for(let j = 0; j < a ; j++){
    b += "* ";
 }
 console.log(b);
}

//2nd Que -> Right - Angled Triangle of * :
let c = Number(prompt("Enter a Number : "));

for (let i = 1; i <= c; i++) {
  let d = "";
  for (let j = 1; j <= i; j++) {
    d += "* ";
  }
  console.log(d);
}

//3rd Que -> Number Triangle Increasing Each Row : 
let e = Number(prompt("Enter a Number : "));

for (let i = 1; i <= e; i++) {
  let f = "";
  for (let j = 1; j <= i; j++) {
    f += j + " ";
  }
  console.log(f);
}

//4th Que -> Triangle With Repeated Row Number : 
let g = Number(prompt("Enter a Number : "));

for (let i = 1; i <= g; i++) {
  let h = "";
  for (let j = 1; j <= i; j++) {
    h += i + " ";
  }
  console.log(h);
}

//5ht Que -> Print Multiplication Tables From 1 to 10 :
for(let i = 1; i <= 10; i++){
    let bag = "";
    for(let j = 1; j <= 10; j++){
        bag = bag+i*j+" ";
    }
    console.log(bag);
}

//6th Que -> Sum of Each Row in 2D Array :
let arr= [[1,2,3] , [4,5,6] , [7,8,9]];
let res = [];
for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++){
        sum = sum+arr[i][j];
    }
    res.push(sum);
}
console.log(res);

//7th Que -> Check Perfect Square :
//1st Approach :
let number = 25;
let root = Math.floor(Math.sqrt(number));
if(root*root == number){
    console.log("Perfect Square");
}
else{
    console.log("Not a perfect square")
}

//8th Que -> ArmStrong Number :
let m = 153;
let arr1 = String(m).split("");
console.log(arr1);

let res1 = 0;
for(let i = 0; i < arr1.length; i++){
  res1=res1+Number(arr1[i])**arr1.length;
}
if(m==res1){
  console.log("Number is ArmStrong");
}
else{
  console.log("Number is Not ArmStrong")
}

//9th Que -> Length of Each String in Array :
function length(str){
    let count = 0;
    
    while(str[count]){
        count++;
    }
    return count;
}
function main(arr){
    let n = arr.length;
    let res = [];
    for(let i = 0; i < n; i++){
        res.push(length(arr[i]));
    }
    console.log(res);
}
main(["Hello","Vishwa","Patel","Here"]);

//10th Que -> Longest String in Array :
function length(str1){
  let count1 = 0;

  while(str1[count1]){
    count1++;
  }
  return count1;
}

function main2(arr1){
  let o = arr1.length;
  let res1 = "";
  let maxLength = 0;
  for(let i = 0; i < o; i++){
    let stringlength = length(arr1[i]);
    if(stringlength > maxLength){
      res1 = arr1[i];
      maxLength = stringlength;
    }
  }
 console.log(res1);
}
main2(["Hellooooo","VHHHHHHishwa","Patel","Here"]);
