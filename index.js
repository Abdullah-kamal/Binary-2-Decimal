
let binary_input = "11011";

// 1×2^4)+(1×2^3)+(0×2^2)+(1×2^1)+(1×2^0)

let decimalOutput = 0;
let count = binary_input.length;

for(const element of binary_input){
    count--;
    decimalOutput += Number(element)* Math.pow(2, count);
}
