const array1 = [1,4,9,16,25];
let newArr = array1.filter((curElem,index,arr)=>{
    return curElem > 5;
}
)

console.log(newArr);