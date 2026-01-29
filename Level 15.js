//1st Que -> Sum of odd Numbers in Array :
function sumOfOddNumbers(arr) {
  return arr.filter(x => x % 2 !== 0).reduce((sum, num) => sum + num, 0);
}

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

//2nd Que -> Swap Elements at indicies i and j :
function swapElements(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

console.log(swapElements([1, 2, 3, 4], 1, 3));  

//3rd Que -> Rotate Array Right by k Positions :
//1st Approach :
function rotateRight(arr,k){
    for(let i = 1; i <= k;i++){
        let add = arr.pop();
        arr.unshift(add);
    }
    console.log(arr);
}
rotateRight([1,2,3,4,5],3);

//2nd Approach :
function rotRight(arr1,k){
    if(arr1.length < k){
        k=k%arr1.length;
    }
    let res = [];
    for(let i = arr1.length-k; i < arr1.length;i++){
        res.push(arr1[i]);
    }
    for(let i = 0; i < arr1.length-k; i++){
        res.push(arr1[i]);
    }
    console.log(res);
}
rotRight([1,2,3,4,5],3);

//4th Que -> Rotate Array Left by k Positions :
//1st Approach :
function leftRotate(arr2,k){
    let res = [];
    for(let i = arr2.length-k-1; i < arr2.length; i++){
        res.push(arr2[i]);
    }
    for(let i = 0; i < arr2.length-k-1;i++){
        res.push(arr2[i]);
    }
    console.log(res);
}
leftRotate([1,2,3,4,5],2);

//2nd Approach :
function rotLeft(arr3,k){
    for(let i = 0; i < k; i++){
        let add=arr3.shift();
        arr3.push(add);
    }
    console.log(arr3);
}
rotLeft([1,2,3,4,5],3);

//5th Que -> Merge Two Sorted Arrays into One Sorted Array :
//1st Approach :
function merge(arr4,arr5){
    let res = arr4.concat(arr5);
    console.log(res);
}
merge([1,2,14],[10,11,12]);

//2nd Approach :
function merge(arr6,arr7){
    let i=0;
    let j=0;
    let res=[]
   while(i<arr6.length && j<arr7.length){
        if(arr6[i]<arr7[j]){
            res.push(arr6[i]);
            i++
        }
        else{
            res.push(arr7[j])
            j++
        }
   }
   while(i<arr6.length){
    res.push(arr6[i]);
    i++
   }
   while(j<arr7.length){
    res.push(arr7[j]);
    j++
   }
   console.log(res)

}
merge([1,9,11],[6,8,12]);

//6th Que -> Bubble Sort (Ascending : in order of short to big // Dascending : in order of big to short) :
//1st Approach :
function bubbleSort(arr8){
    let n = arr8.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr8[j] > arr8[j + 1]){
                let m = arr8[j];
                arr8[j] = arr8[j+1];
                arr8[j+1] = m;
            }
        }
    }
    return arr8;
}
console.log(bubbleSort([10,15,29,5]));

//2nd Approach :
function bblSort(arr9){
    for(let i = 0; i < arr9.length; i++){
        for(let j = 0; j < arr9.length - 1 - i; j++){
            if(arr9[j] > arr9[j+1]){
                let temp = arr9[j];
                arr9[j] = arr9[j+1];
                arr9[j+1] = temp;
            }
        }
    }
    console.log(arr9);
}
bblSort([17,10,5,15,29]);

//7th Que -> Selection Sort (Ascending : in order of short to big // Dascending : in order of big to short) :
//1st Approach :
function selectionSort(arr10){
    let n = arr10.length;

    for(let i = 0; i < n; i++){
        let minIndex = i;
    }

    for(let j = i + 1; j < n; j++){
        if(arr[j] < arr[minIndex]){
            minIndex = j;   
        }
    }
    let temp = arr10[i];
    arr10[i] = arr10[minIndex];
}

//2nd Approach :
function selectionSort(arr11){
    for(let i = 0; i < arr11.length; i++){
        let max = -Infinity;
        let maxIndex = 0;
        for(let j = 0; j < arr11.length-i; j++){
            if(arr11[j] > max){
                max = arr11[j];
                maxIndex = j;
            }
        }
        [arr11[arr11.length-i-1],arr11[maxIndex]] = [arr11[maxIndex],arr11[arr11.length-i-1]];
    }
    console.log(arr11);
}
selectionSort([5,29,10,15,17]);

//8th Que -> Insertion Sort (Ascending : in order of short to big // Dascending : in order of big to short) :
//1st Approach :
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([3, 1, 4, 2])); 

//2nd Approach :
function inSort(arr13){
    for(let i = 0; i < arr13.length; i++){
        for(let j = i; j >= 1; j--){
            if(arr13[j] < arr13[j-1]){
                [arr13[j],arr13[j-1]] = [arr13[j-1],arr13[j]];
            }
            else{
                break;
            }
        }
    }
    console.log(arr13);
}
inSort([15,29,10,5,7]);

//9th Que -> k-th smallest Element :
function kthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); 

//10th Que -> k-th largest Element :
function kthLargest(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}

console.log(kthLargest([7, 10, 4, 3, 20, 15], 2)); 