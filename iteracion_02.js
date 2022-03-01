const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let longest = 0;
    let word = '';
    for (let i = 0; i < param.length; i++) {
        if (param[i].length > longest) {
            longest = param[i].length;
            word = param[i];
        }
    }
    return word;
};
console.log(findLongestWord(avengers));