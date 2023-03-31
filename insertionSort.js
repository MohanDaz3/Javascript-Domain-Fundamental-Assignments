function insertionSort(array){
    for(let i=1;i<array.length-1;i++){
        let numberToInsert=array[i]
       let j=i-1
       while(j>=0&&array[j]>numberToInsert){
        array[j+1]=array[j]
        j=j-1
       }
        array[j+1]=numberToInsert
    }
}
const arr=[5,2,1,3,4]
insertionSort(arr)
console.log(arr);