//1st Que -> Print All ELements In An Araray :
//1st Approach :
let arr = [1,2,3];
let res = "";
for(let i = 0;i < arr.length;i++){
    res = res + arr[i] + " ";
}
console.log(res);

//2nd Approach :
let arr1 = [1,2,3];
console.log(...arr1)
console.log(arr1.join(" "));

//2nd Que -> Sum of Array Elements : 
let arr2 = [5,29,10];     
let sum = 0;
for(let i = 0;i < arr2.length;i++){
    sum = sum + arr2[i];
}
console.log(sum);

//3rd Que -> Maximum Element in an Array :
//1st Approach :
let arr3 = [5,29,10];     
let max = arr3[0];
for(let i = 1;i < arr3.length;i++){
    if(arr3[i] > max){
        max = arr3[i];
    }
}
console.log(max);

//2nd Approach :
let arr4 = [5,29,10];
let maxVal = Math.max(...arr4);
console.log(maxVal);

//4th Que -> Minimum Element in an Array :
//1st Apprach : 
let arr5 = [5,29,10];     
let min = arr5[0];  
for(let i = 1;i < arr5.length;i++){
    if(arr5[i] < min){
        min = arr5[i];
    }
}
console.log(min);

//2nd Approach :
let arr6 = [5,29,10];
let minVal = Math.min(...arr6);
console.log(minVal);

//5th Que -> Count Even Number In An Array : 
let arr7 = [1,2,3,4,5];
let count = 0;
for(let i = 0; i < arr7.length; i++){
    if(arr7[i] % 2 == 0){
        count++;
    }
}
console.log(count);

//6th Que -> Count Odd Number In An Array : 
let arr8 = [1,2,3,4,5];
let count1 = 0;
for(let i = 0; i < arr8.length; i++){
    if(arr8[i] % 2 != 0){
        count1++;
    }
}
console.log(count1);

//7th Que -> Print Only Positive Numbers :
let arr9 = [5,29,-10,-5];
let count2 = 0;
for(let i = 0; i < arr9.length; i++){
    if(arr9[i] > 0 ){
        console.log(arr9[i]);
    }
}

//8th Que -> Print Only Negative Numbers :
let arr10 = [5,29,-10,-5];
let count3 = 0;
for(let i = 0; i < arr10.length; i++){
    if(arr10[i] < 0 ){
        console.log(arr10[i]);
    }
}

//9th Que -> Print Elements Greater Than 10 : 
let arr11 = [5,29,10,15];
let count4 = 0;
for(let i = 0 ; i < arr11.length; i++){
    if(arr11[i] > 10){
        console.log(arr11[i]);
    }
}

//10th Que -> Average of Array Elements : 
let arr12 = [5,29,10];
let average = 0;
for(let i = 0; i < arr12.length; i++){
    average = average + arr12[i];
}
console.log(average / arr12.length);