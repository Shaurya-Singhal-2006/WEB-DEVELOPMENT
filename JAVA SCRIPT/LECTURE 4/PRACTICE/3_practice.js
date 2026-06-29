// create an array to store companies --> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"

// a. Remove the first company from the array
// b. Remove Uber and add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// A
companies.shift();
console.log(companies);

// B
companies.splice(2,1,"Ola");
console.log(companies);

// C
companies.push("Amazon");
console.log(companies);