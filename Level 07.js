//1st Que -> Double Each Element :
let arr = [1,20,30,40]
let res = [];
for(let i = 0;i < arr.length;i++){
    res.push(arr[i]*2);
}
console.log(res)

//2nd Que -> Square Each Element :
let arr1 = [5,29,10];
let square = [];
for(let i = 0 ; i < arr1.length; i++){
    square.push(arr1[i]*arr1[i]);
}
console.log(square)

//3rd Que -> Reverse an Array Into New Array :
//1st Approach :
let arr2 = [10,29,5];
let rev = new Array(arr2);
console.log(rev.reverse());

//2nd Approach :
let arr3 = [10,29,5];
let rev1 =[];
for(let i = arr3.length - 1; i >= 0; i--){
    rev1.push(arr3[i]);
}
console.log(rev1);

//3rd Approach : 
let arr4 = [10,29,5];
let a = 0;
let b = arr4.length-1;
while(a <= b){
    [arr4[a],arr4[b]] = [arr4[b],arr4[a]];
    a++;
    b--;
}
console.log(arr4)

//4th Que -> Copy Array : 
let arr5 = [5,29,10];
let copyarr = new Array(arr5);
console.log(arr5);

//5th Que -> Check if Array Contains a Value :
//1st Approach :
let arr6 = [5,29,10];
let c = 5;

console.log(arr6.includes(c));

for(let i = 0; i < arr6.length; i++){
    if(arr6[i] == c){
        console.log(true);
        return;
    }
}
console.log(false)

//2nd Approach : 
let arr7 = [5,29,10,7];
let value = 5;

for(let i = 0; i < arr7.length; i++){
    if(arr7[i] == value){
        console.log(true);
        return;
    }
}
console.log(false);

//6th Que -> Find Index Of A Value :
//For Index :
let arr8 = [5,29,10,7];
let index = 5;
console.log(arr8.indexOf(index));

//Approach For the Question :
let arr9 = [5,29,10,7];
let ind = 29;
console.log(arr9.indexOf(ind));

let present = true;
for(let i =  0; i < arr9.length; i++){
    if(arr9[i] == ind){
        console.log(i);
        break;
    }
    else if(i == arr9.length-1){
        console.log(-1)
    }
}

//7th Que -> Frequency of a Value :
//1st Approach :
let arr10 = [5,29,10,7,15,7];
let freq = 15;
let count = 0;

for (let num of arr10) {
  if (num === freq) count++;
}
console.log(count);

//2nd Approach :
let arr11 = [5,29,10,7,15,7,15];
let fre = 15;

let count1 = 0;
for(let i = 0; i < arr11.length; i++){
    if(arr11[i] == fre){
        count1++;
    }
}
console.log(count1)

//3rd Approach :
let arr12 = [5,29,10,7,15,7,15];
let frequ = 15;

let obj = {};
for(let i = 0; i < arr12.length; i++){
    if(obj[arr12[i]] != undefined){
        obj[arr12[i]]++;
    }
    else{
        obj[arr12[i]] = 1;
    }
}
console.log(obj[frequ]);

//8th Que -> Check If Array is Sorted : 
//1st Approach :
let arr13 = [1,2,3,4];
let sorted1 = true;

for (let i = 1; i < arr13.length; i++) {
  if (arr13[i] < arr13[i - 1]) {
    sorted1 = false;
    break;
  }
}
console.log(sorted1);

//2nd Approach :
let arr14 = [1,2,3,7,5];
for(let i = 1; i < arr14.length; i++){
     if(arr14[i] < arr14[i-1]){
        console.log("Array is Not Sorted : ")
        return;
    }
}
console.log("Array is Sorted")

//9th -> Find Second Largest Element :
//1st Approach :
let arr15 = [1,2,24,3,43,34,3];
let largest = -Infinity;

for(let i = 0; i < arr15.length; i++){
  if(arr15[i] > largest){
    largest = arr15[i];
  }
}
console.log("This Is The Largest : ",largest)

let slargest = -Infinity;
for(let i = 0;i < arr15.length; i++){
  if(arr15[i] > slargest && arr15[i] < largest){
    slargest = arr15[i];
  }
}
console.log("This is The Second Largest : ",slargest)

//2nd Approach :
let arr16 = [5,29,10,7,15];
let larg = -Infinity;
let slarg = -Infinity;

for(let i = 0; i < arr16.length; i++){
  if(arr16[i] > larg){
    slarg = larg;
    larg = arr16[i];
  }
  else if(arr16[i] > slarg && arr16[i] < larg){
    slarg =arr16[i]
  }
}
console.log(slarg)

//10th Que -> Second Smallest Element :
//1st Approach :
let arr17 = [10, 5, 8, 20];
let smallestnum = Infinity, 
secondnum = Infinity;

for (let num of arr17) {
  if (num < smallestnum) {
    secondnum = smallestnum;
    smallestnum = num;
  } else if (num < secondnum && num > smallestnum) {
    secondnum = num;
  }
}
console.log(secondnum);

//2nd Approach :
let arr18 = [5,20,10,15,7];
let smallest = Infinity;
let ssmallest = Infinity;

for(let i = 0; i < arr18.length; i++){
  if(arr18[i] < smallest){
    secondsmallest = smallest;
    smallest = arr18[i];
  }
  else if(arr18[i] < secondsmallest && arr18[i] > smallest){
    secondsmallest = arr18[i];
  }
}
console.log(secondsmallest)
