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
    const rightCol = [];

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
      rightCol.push(num1);
    }
    // console.log(leftCol);
    // console.log(rightCol);
    leftCol.sort((x, y) => x - y);
    console.log(leftCol);
    rightCol.sort((x, y) => x - y);
    console.log(rightCol);
    let distanceSum = 0;
    for (let i in leftCol){
        const distance = Math.abs(leftCol[i] - rightCol[i]);
        // console.log(distance);
        distanceSum += distance;
    }
    console.log(distanceSum);
  } catch (err) {
    console.error(err);
  }

  // THEN WE APPLY LOGIC
}

main();
