class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.input = inputUTXOs;
    this.output = outputUTXOs;
  }
  execute() {
    const anySpent = this.input.some((x) => x.spent);
    const total = 0;
    const lenght = this.input.lenght;
    if (anySpent) {
      throw new Error("Cannot include a spent UTXO");
    }

    for (let i = 0; i < lenght; i++) {
      total = this.input[i][1] + total;
    }

    if (total < this.output[1]) {
      throw new Error(
        "the total value of the inputs is less than the total value of the outputs"
      );
    }
  }
}

module.exports = Transaction;
