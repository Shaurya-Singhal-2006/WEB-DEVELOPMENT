// For a given array with the price of 5 items -> [250,645,300,900,50]
// All items an offer of 10% OFF on them change the array to store final price after applying offer

let price = [250,645,300,900,50];

for(let i = 0 ; i < price.length ; i++){
    price[i] = price[i] - price[i]/10;
}

console.log(`the Final price after 10% off is --> ${price}`);