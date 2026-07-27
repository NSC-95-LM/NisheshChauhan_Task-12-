console.log("Checker: The Script file has been connected!");

let ppl = 50000; 
let roi = 7.5/100;
let no = 4;
let yrs = 3;
let amt = ppl*(1+(roi/no))**(no*yrs)

console.log("Principal Amount:", ppl);
console.log("Rate of Interest:", roi*100, "%");
console.log("Number of times the interest is compounded per year:", no);
console.log("Duration of locking:", yrs, "Years");
console.log("Interest Earned: ₹", amt-ppl, "/-");
console.log("The compound interest after", yrs, "years is: ₹", amt, "/-");
