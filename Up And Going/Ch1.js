const PHONE_PRICE = Number(prompt("Phone Price:"));
const TAX_RATE = Number(prompt("Tax Rate")) / 100;
const TRESHOLD = Number(prompt("Threshold:"));//estimate price without tax
const ACCESSORY = Number(prompt("Accessory Price"));

var bankBalance = 303.91;

var totalPrice = 0;
//will run until we run out of money in Bank Account
while (totalPrice < bankBalance){
  totalPrice+=PHONE_PRICE;
  if(totalPrice <  TRESHOLD)
    totalPrice+=ACCESSORY;
}
console.log(totalPrice);
console.log("Total Due Amount: " + calculateTax().toFixed(2));
console.log(purchase());
function calculateTax(){
  return totalPrice + totalPrice * TAX_RATE;
}
function purchase(){
  if(totalPrice <= bankBalance)
    console.log("PURCHASED. PLEASE COME AGAIN");
  else {
    console.log("INSUFFICIENT FUNDS. PLEASE TRY AGAIN");
  }
}
console.log();
