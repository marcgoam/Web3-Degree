class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.input = inputUTXOs;
    this.output = outputUTXOs;
  }
  execute() {
    const anySpent = this.input.some((x) => x.spent);
    const total = 0;
    if (anySpent) {
      throw new Error("Cannot include a spent UTXO");
    }

    for (let i = 0; i < this.input.length; i++) {
      total = this.input[i].amount + total;
    }

    if (total < this.output[0].amount) {
      throw new Error(
        "the total value of the inputs is less than the total value of the outputs"
      );
    }
  }
}

module.exports = Transaction;
