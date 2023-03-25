// sorting of an array
const array=[1,4,2,5,3]
console.log(array.reverse());
// or //
let i
let j
let temp
for(i=0,j=array.length-1;i<j;i++,j--){
    temp=array[i]
    array[i]=array[j]
    array[j]=temp
}
console.log(array);