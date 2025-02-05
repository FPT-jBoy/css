let character = "#";
const rows=[];
const rowLength = 8;
let pyramid = "" ;
/* rows.push(" ".repeat(3) + character.repeat(1))  // 1 
rows.push(" ".repeat(2) + character.repeat(3))  // 2 
rows.push(" ".repeat(1) + character.repeat(5))  // 3
rows.push(" ".repeat(0) + character.repeat(7))  // 4
console.log(rows); */
let done = 1;
function getPyramid(rowLength, rowNumber) {
  return " ".repeat(rowLength - rowNumber + 3) + character.repeat(2 * rowNumber - 1);
}

let i = 1;
let build = "";
while (i <= rowLength) {
  rows.push(getPyramid(rowLength, i));
  i++;
}
for (let j = 1; j <= rowLength; j++) {
  build = build + rows[j - 1] + "\n";
}
console.log(build);




