//1st Que -> Binary Search in Sorted array :
function binary(arr,k){
    let i = 0;
    let j = arr.length-1;
    while(j >= i){
        let mid = Math.floor((i+j)/2);
        if(arr[mid] > k){
            j = mid - 1;
        }
        else if(arr[mid] < k){
            i = mid + 1;
        }
        else{
            console.log(mid);
            return;
        }
    }
    console.log(-1);
}
binary([1,2,3,4,5],4);

//2nd Que -> Count Occurence of Target in Sorted Array :
function countOccurrences(arr1, k){
    let count = 0;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === k) count++;
    }
    console.log(count);
}
countOccurrences([1,2,3,4,5],5);

//3rd Que -> Any Pair with Given Sum (Brute Force)
function pairSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                console.log(true);
                return;
            }
        }
    }
    console.log(false);
}
pairSum([1,2,3,4],5);

//4th Que -> Any Triplet with Given Sum (Brute Force) 
function tripletSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            for(let k = j + 1; k < arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === target){
                    console.log(true);
                    return;
                }
            }
        }
    }
    console.log(false);
}
tripletSum([1,2,3,4,5],9);

//5th Que -> Maximum SubArray Sum :
//1st Approach :
function subArray(arr){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        for(let j = i; j < arr.length; j++)  sum += arr[j],max = Math.max(max,sum);
    }
    return max;
}
console.log(subArray([5,29,10,15]));

//2nd Approach :
function MaxSum(arr1){
    let max = -Infinity;
    for(let i = 0; i < arr1.length; i++){
        let current = 0;
        for(let j = i; j < arr1.length; j++){
            current = current + arr1[j];
            if(current > max){
                max = current;
            }
        }
    }
    console.log(max);
}
MaxSum([1,-2,3,-4,1]);

//6th Que -> Max Sum of Subarray of Size k (Brute Force)
function maxSumSizeK(arr, k){
    let max = -Infinity;

    for(let i = 0; i <= arr.length - k; i++){
        let sum = 0;
        for(let j = i; j < i + k; j++){
            sum += arr[j];
        }
        if(sum > max) max = sum;
    }
    console.log(max);
}
maxSumSizeK([1,2,3,4,5],2);

//7th Que -> First Non-Repeating Character in a String :
function firstNonRepeating(str){
    for(let i = 0; i < str.length; i++){
        let notpresent = true;
        for(let j = 0; j < str.length; j++){
            if(i == j) continue;
            if(str[i] == str[j]) notpresent = false;
        }
        if(notpresent){
            console.log(str[i]);
            return;
        }
    }
    console.log(null);
}
firstNonRepeating("swisss");

//8th Que -> First Repeating Character in a String :
function firstRepeating(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] == str[j]){
                console.log(str[i]);
                return;
            }
        }
    }
    console.log(null);
}
firstRepeating("swisss");

//9th Que -> Remove Consecutive Duplicate Characters :
function removeDuplicates(str1){
    let res = "";
    for(let i = 0; i < str1.length; i++){
        if(str1[i] != str1[i+1]){
            res += str1[i];
        }
    }
    console.log(res);
}
removeDuplicates("aaabcccddd");

//10th Que -> Remove Consecutive Duplicates in Array :
function removeDup(arr3){
    let res = [];
    for(let i = 0; i < arr3.length; i++){
        if(arr3[i] != arr3[i+1]){
            res.push(arr3[i]);
        }
    }
    console.log(res);
}
removeDup([5,29,10,29,15]);