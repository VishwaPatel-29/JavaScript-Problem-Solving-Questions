//1st Que -> Count Positive,Negative and Zero :
//1st Approach :
let arr = [5,10,15,-29,10];
let count1 = 0;
let count2 = 0;
let count3 = 0;
for(let i = 0; i < arr.length;i++){
    if(arr[i] > 0){
        count1++;
    }
    else if(arr[i] < 0){
        count2++;
    }
    else{
        count3++;
    }
}
console.log("Positive : ",count1);
console.log("Negative : ",count2);
console.log("Zero : ",count3);


//2nd Approach :
function specificCounts(arr1){
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > 0){
        positiveCount++;
    }
    else if(arr1[i] < 0){
        negativeCount++;
    }
    else{
        zeroCount++;
    }
}
console.log("Positive : ",positiveCount);
console.log("Negative : ",negativeCount);
console.log("Zero : " ,zeroCount);
}
specificCounts([5,10,15,29,10,-15,0]);

//2nd Que -> Triple Each Element :
//1st Approach :
function multiple(arr2){
    let arr3 = [];
    for(let i = 0; i < arr2.length; i++){
    arr3.push(arr2[i]*3)      
    }
    console.log(arr3);
}
multiple([5,29,10]);

//3rd Que -> Absolute Values of Array Elements :
//1st Approach :
function absolute(arr5){
    for(let i = 0; i < arr5.length; i++){
        arr5[i] = Math.abs(arr5[i]);
    }
    console.log(arr5)
}
absolute([5,10,29,-5,-29]);

//2nd Approach :
function abs(arr6){
    let res = [];
    for(let i = 0; i < arr6.length; i++){
        res.push(Math.abs(arr6[i]));
    }
    console.log(res);
}
abs([5,10,29,-5,-29,-10]);

//4th Que -> All Elements Even :
//1st Approach :
function allEven(arr7){
    for(let i = 0; i < arr7.length;i++){
        if(arr7[i] % 2 != 0){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
allEven([15,29,10]);

//2nd Approach :
function allEv(arr8){
    for(let i = 0; i < arr8.length; i++){
        if(arr8[i] % 2 != 0){
        console.log(false);
             return;
        }
        console.log(true);
    }
}
allEv([15,29,10]);

//5th Que -> AtLeast One Element Even :
function atleastOneEven(arr9){
    for(let i = 0; i < arr9.length; i++){
        if(arr9[i] % 2 == 0){
            console.log(true);
            return;
        }
    }
    console.log(false);
}
atleastOneEven([1,4,5]);

//6th Que -> All Elements Positive :
function positive(arr10){
    for(let i = 0; i < arr10.length; i++){
        if(arr10[i] <= 0){
            console.log(false);
            return;
        }
    }
    console.log(true);
}

//7th Que -> Count Elements Greater than k :
function great(arr11,k){
    let count = 0;
    for(let i = 0; i < arr11.length; i++){
        if(arr11[i]>k){
            count++;
        }
    }
    console.log(count);
}
great([5,29,10],5);

//8th Que -> Index of Maaximum Element :
function maxIndex(arr12){
    let maxIndex =0;
    for(let i = 0; i < arr12.length; i++){
        if(arr12[i] > arr12[maxIndex]){
            maxIndex = i;
        }
    }
    console.log(maxIndex);
}
maxIndex([5,29,10]);

//9th Que -> Index of Minimum Element :
function minElement(arr13){
    let minIndex = 0;
    for(let i = 0; i < arr13.length; i++){
        if(arr13[i] < arr13[minIndex]){
            minIndex = i;
        }
    }
    console.log(minIndex);
}
minElement([5,29,10]);

//10th Que -> Contains Any Duplicate ? :
//1st Approach :
function duplicate(arr14){
    let obj = {};
    for(let i = 0; i < arr14.length; i++){
        if(obj[arr14[i]]){
            return true;
        }
        obj[arr14[i]] = 1;
    }
    return false;
}
console.log(duplicate([5,29,10,5]));

//2nd Approach :
function checkDuplicate(arr15){
    let obj1 = {};
    
    for(char of arr15){
        if(obj1[char]){
            obj1[char]++;
        }
        else{
            obj1[char] = 1;
        }
    }
    
    for(let char in obj1){
        if(obj1[char] > 1){
            console.log(true);
            return;
        }
        console.log(false);
    }
}
checkDuplicate([5,29,10,5]);

//11th Que -> Unique Elements Without Set :
function uniqueEle(arr16){
    let obj2 = {};
    for(let i = 0; i < arr16.length; i++){
        if(obj2[arr16[i]]){
            return false;
        }
        obj2[arr16[i]] = 1;
    }
    return true;
}
console.log(uniqueEle([5,29,10]));

//12th Que -> Strictly Increasing Sorted Array :
function strictlyIncreasing(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= arr[i-1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
strictlyIncreasing([5,10,15]);

//13th Que -> Move all Negative Numbers to Front :
function moveNegativesFront(arr) {
  return arr.filter(x => x < 0).concat(arr.filter(x => x >= 0));
}

console.log(moveNegativesFront([5,-10,15,-29,10,-5])); 

//14th Que -> Maximum Difference (Max-Min) :
function maxDifference(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

console.log(maxDifference([5,10,15,29]));   

//15th Que -> Elements at even Indices :
function elementsAtOddIndices(arr) {
    return arr.filter((_, index) => index % 2 === 0);
}

console.log(elementsAtOddIndices([10, 20, 30, 40, 50])); 
console.log(elementsAtOddIndices(["a", "b", "c", "d"])); 
console.log(elementsAtOddIndices([1]));                 

//16th Que -> Elements at odd Indices :
function elementsAtOddIndices(arr) {
  return arr.filter((_, index) => index % 2 !== 0);
}

console.log(elementsAtOddIndices([10, 20, 30, 40, 50])); 
console.log(elementsAtOddIndices(["a", "b", "c", "d"])); 
console.log(elementsAtOddIndices([1]));                

//17th Que -> Count Strings with Length > 3 :
function countStringsLengthGreaterThan3(arr) {
  return arr.filter(str => str.length > 3).length;
}

console.log(countStringsLengthGreaterThan3(["hi", "hello", "hey", "Java"])); 

//18th Que -> First Character of Each String :
function firstCharacters(arr) {
  return arr.map(str => str[0]);
}

console.log(firstCharacters(["apple", "banana", "cherry"])); 

//19th Que -> Remove Empty Strings from an Array :
function removeEmptyStrings(arr) {
  return arr.filter(str => str !== "");
}

console.log(removeEmptyStrings(["a", "", "b", "", "c"]));

//20th Que -> Sum of Even Numbers in Array :
function sumOfEvenNumbers(arr) {
  return arr.filter(x => x % 2 === 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5])); 