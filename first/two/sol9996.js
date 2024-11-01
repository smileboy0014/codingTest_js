const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) =>{
    let pattern = input[1].trim();
    let [start, end] = pattern.split('*');
    let result = [];

    for(let i = 2; i < input.length; i++){
        let fileName =  input[i].trim(); // abcd, anestonestod, facebook

        if(fileName.startsWith(start) && fileName.endsWith(end) && fileName.length >= start.length + end.length){
            result.push('DA');
        } else {
            result.push('NE');
        }
    }

    return result.join('\n');

}

console.log(solution(input));
