//1st Que -> Remove Even Numbers :
//1st Approach :
let arr = [5,29,10,15,7,22];
let res = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] %2 !== 0){
        res.push(arr[i])
    }
}
console.log(res)

//2nd Approach :
let arr1 = [5,29,10,15,7,22];
let res1 = arr1.filter((value) => {
    return value %2!=0;
})
console.log(res1);

//3rd Approach :
let arr2 = [5,29,10,15,7,22];
for(let i = 0; i < arr2.length; i++){
    if(arr2[i]%2==0){
        arr2.splice(i,1);
        i=i-1;
    }
}
console.log(arr2);

//2nd Que -> Remove Duplicates :
//1st Approach :
function removeDuplicates(arr) {
    let seen = {};      
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3])); 

//2nd Approach :
let arr3 = [1,2,2];
let i = 0;
for(let i = 0; i < arr3.length; i++){
    if(arr3[i] == arr3[i-1]){
        arr3.splice(i,1);
        i = i-1;
    }
}
console.log(arr3)

// //2nd Approach :
// let arr = ["a","a","b"];

// let arr = [5,29,10,15,7,15];

// let res = [];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] != arr[i-1]){
//         res.push(arr[i])
//     }
// }
// console.log(res);

// let obj = {};
// let res1 = [];
// for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
//     }
//     else{
//         obj[arr[i]] = 0
//         res1.push(arr[i])
//     }
// }
// console.log(obj)
// for(let char in obj){
//     res1.push(Number(char))
// }
// console.log(res1)

//3rd Que -> Concatenate Two Arrays :
//1st Approach :
let arr4 = [5,10];
let arr5 = [29,10];

let res2 = [...arr4,...arr5];
console.log(res2);

//2nd Approach :
let arr6 = [5,10];
let arr7 = [29,10];
let res3 = arr6.concat(arr7);
console.log(res3)

//3rd Approach :
let arr8 = [5,10];
let arr9 = [29,10];
let res4 = [];
for(let i = 0; i < arr8.length; i++){
    res4.push(arr8[i])
}
for(let i = 0; i < arr9.length; i++){
    res4.push(arr9[i])
}
console.log(res4)

//4th Que -> InterSection Of Two Arrays :
//1st Approach :
let arr10 = [5,10,15];
let arr11 = [29,10,15];

let ress = [];
for(let i = 0; i < arr10.length; i++){
    if(arr10[i] == arr11[i]){
        ress.push(arr11[i]);
    }
}
console.log(ress)

//2nd Approach :
let arr12 = [5,10,15];
let arr13 = [29,10,15];

let res5 = [];
arr12 = arr12.sort((a,b) => a-b);
arr13 = arr13.sort((a,b) => a-b);

let a = 0;
let b = 0;

while(a < arr12.length && b < arr13.length){
    if(arr12[a] == arr13[b]){
        res5.push(arr12[a])
            a++;
            b++;
        }
        else if(arr12[a] > arr13[b]){
            b++;
        }
        else{
            a++;
        }
    }
console.log(res5)

//3rd Approach :
let arr14 = [5,10,15];
let arr15 = [29,10,15];

let res6 = [];
let n = Math.min(arr14.length,arr15.length)

for(let i =0; i < n; i++){
    if(arr14.includes(arr15[i]) && !(res6.includes(arr14[i]))){
        res6.push(arr14[i])
    }
}
console.log(res6);

//5th Que -> Rotate Array Right By 1 :
//1st Approach :
let arr16 = [5,29,10,15,7];
if(arr16.length > 1){
let add = arr16.pop();
arr16.unshift(add);
}
console.log(arr16);

let arr17 = [1, 2, 3, 4];

if (arr17.length > 1) {
    let last = arr.pop();
    arr.unshift(last);
}

console.log(arr); 

let arr18 = [5,29,10,15,7];

if (arr18.length > 1) {
    let last = arr18[arr18.length - 1];

    for (let i = arr18.length - 1; i > 0; i--) {
        arr18[i] = arr18[i - 1];
    }

    arr18[0] = last;
}

console.log(arr18);

//6th Que -> Rotate Array Left By 1 :
//1st Approach :
let arr19 =[5,10,15,29];
let add1 = arr19.shift();
arr19.push(add1);
console.log(arr19);

//2nd Approach :
let arr20 = [5,10,15,29];
let res7 =[];
for(let i = 1; i < arr20.length; i++){
    res7.push(arr20[i]);
}
res7.push(arr20[0]);
console.log(res7);

//7th Que -> Count Elements Greater Than Average :
let arr21 = [5,29,10,15];
let count = 0;
let average = 0;
for(let i =0; i < arr21.length; i++){
    average = average+arr21[i];
}

average=average/arr21.length;

for(let i = 0; i <arr21.length;i++){
    if(arr21[i]>average){
        count++;
    }
}
console.log(count);

//8th Que -> Largest Positive and Smallest Negative : 
//1st Approach :
let arr22 = [5,29,10,15,-17];
let max = Math.max(...arr22);
let min = Math.min(...arr22);
console.log("Maximum Number : " , max > 0 ? max : Null);
console.log("Minimum Number : " , min < 0 ? min : Null);

//2nd Approach : 
let arr23 = [5,29,10,15,-17];
let max1 = 0;
let min1 = 0;
for(let i = 0; i < arr23.length; i++){
    if(arr23[i] > max1){
        max1 = arr23[i];
    }
    if(arr23[i] < min1){
        min1 = arr23[i];
    }
}
console.log("Maximun Number : " , max1 > 0 ? max1 : Null);
console.log("Minimum Number : " , min1 < 0 ? min1 : Null);

//9th Que -> Count 0 and 1 in Binary Array : 
let arr24 = [0,1,0,1,1];
let count1 = 0;
let count2 = 0;
for(let i = 0; i < arr24.length; i++){
    if(arr24[i] == 0){
        count1++;
    }
    else if(arr24[i] == 1){
            count2++;
        
    }
    console.log("Zero : ",count1);
    console.log("One : ",count2);
}

//10th Que -> Seprate Even and Odd into Two Arrays : 
let arr25 = [5,29,15,10];
let even = [];
let odd = [];
for(let i = 0; i < arr25.length; i++){
    if(arr25[i] % 2 == 0){
        even.push(arr25[i]);
    }
    else{
        odd.push(arr25[i]);
    }
}
console.log("Even Array : ",even);
console.log("Odd Array : ", odd);