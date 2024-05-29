let word = ['python', 'javascript', 'go', 'java', 'php', 'rubby'];

function fiters(arr){
    return arr.filter(word => word.length >= 8);
}

console.log("original words:",word);
console.log("Filtered 8 characters:",fiters(word));