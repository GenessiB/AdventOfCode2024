const fs = require("fs");

async function main() {
  // node .\HystorianHysteria1.js test.txt
  // node .\HystorianHysteria1.js data.txt
  console.log(process.argv[2]);

  try {
    // FIRST WE GET THE DATA FROM THE FILE
    const data = fs.readFileSync(process.argv[2], "utf8");

    // WE TRANSFORM THE STRINGS INTO THE DATA WE NEED
    const rows = data.split("\r\n");
    // console.log(rows);

    const leftCol = [];
    const rightMap = new Map();

    for (const row of rows) {
      // console.log(row);
      const splitRow = row.split("   ");
      console.log(splitRow);
      const num0 = Number(splitRow[0]);
      const num1 = Number(splitRow[1]);
      if (Number.isNaN(num0) || Number.isNaN(num1)) {
        throw new Error("num0 or num1 is NaN");
      }
      leftCol.push(num0);
      rightMap.set(num1, (rightMap.get(num1) || 0) + 1);
    }
    console.log(leftCol);
    console.log(rightMap);
    let sum = 0;
    for (const id of leftCol) {
      if (rightMap.has(id) == false) {
        continue;
      }
      const result = id * rightMap.get(id);
      sum += result;
    }
    console.log(sum);
  } catch (err) {
    console.error(err);
  }

  // THEN WE APPLY LOGIC
}

main();
