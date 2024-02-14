const range = (start, end) =>{
    let result = [...Array (end - start + 1).keys()].map((el)=> el+1);
    return result
}

console.log(range(1,50));