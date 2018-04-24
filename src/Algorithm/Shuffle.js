const shuffle = (arr) => {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}


// arr.sort(()=>{
// 	return Math.random() - 0.5;
// });

export default shuffle;
