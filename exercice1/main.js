const Transaction = require("./Transaction");
const TXO = require("./TXO");

const fromAddress = "1DBS97W3jWw6FnAqdduK1NW6kFo3Aid1N6";
const toAddress = "12ruWjb4naCME5QhjrQSJuS5disgME22fe";

const txo1 = new TXO(fromAddress, 3);
const txo2 = new TXO(fromAddress, 3);
const txo3 = new TXO(fromAddress, 3);
const outputTXO1 = new TXO(toAddress, 10);

const tx = new Transaction([txo1, txo2, txo3], [outputTXO1]);
let total = 0;

// console.log(tx.input.length);

for (let i = 0; i < tx.input.length; i++) {
  total = tx.input[i].amount + total;
  console.log(total);
}

if (total < tx.output[0].amount) {
  console.log("error");
}

tx.execute();
