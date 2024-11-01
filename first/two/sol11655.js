const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

const solution = (input) =>{
    const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const str2 = 'abcdefghijklmnopqrstuvwxyz';

    return input.split('').map(v =>{
        let idx;
        if(str1.indexOf(v) !== -1){
            idx = str1.indexOf(v);
            return str1[(idx+13)%26];
        } else if(str2.indexOf(v) !== -1){
            idx = str2.indexOf(v);
            return str2[(idx+13)%26];
        } else {
            return v;
        }
    }).join('');   
}




console.log(solution(input));