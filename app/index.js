// ES 6 new concepts
// Closures - private

const budget = () => {
  //private
  let balance = 0;
  // private Methode inside - not returning
  let changeBal = (val) => {
    return balance += val;
  }

  // methods with returning
  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;


  return {
    deposit20: deposit20,
    withdraw20: withdraw20,
    check: check
  }


}


let wallet = budget();
console.log("wallet: ", wallet);

wallet.deposit20();
wallet.withdraw20();
console.log("wallet.check:", wallet.check());
console.log("wallet.deposit20:", wallet.deposit20());
console.log("wallet balance", wallet.balance); // undefined cause private
console.log("wallet withdraw20: ", wallet.withdraw20());
