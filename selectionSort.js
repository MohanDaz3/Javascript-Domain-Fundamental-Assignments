// Selection Sort
function selectionSort(array1){
    let array=array1.slice()
    for(let i=0;i<array.length-1;i++){
        let minIndex=i
        for(let j=i+1;j<array.length;j++){
           if(array[j]<array[minIndex]){
            minIndex=j
           }
        }
        const temp=array[i]
        array[i]=array[minIndex]
        array[minIndex]=temp
    }
    return array
}

const arr=[2,5,3,6,4,1]
result=selectionSort(arr)
console.log(result);

// big-O => O(n^2)