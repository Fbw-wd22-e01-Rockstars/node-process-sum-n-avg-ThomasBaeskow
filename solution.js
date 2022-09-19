function parseNumbersArgs (arg) {
    const number = parseInt(arg)
    if(isNaN(number)) {
        console.log(`${arg} is not a number`);
        process.exit
    }
    return number
}


let args = process.argv.slice(2)
const [operation,...rest] = args
console.log(rest);
console.log(operation);


if(operation !== "sum" && operation !== "avg"){
    console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)');
}

const numbers = rest.map(parseNumbersArgs)

function sum (numArray) {
    return numArray.reduce((prevValue,currentValue)=>prevValue + currentValue, 0)
}

function avg (numArray) {
    const sum = numArray.reduce((prevValue,currentValue)=>prevValue + currentValue, 0)
    const length = numArray.length
    return sum/length
}

switch (operation) {
    case "sum":
        console.log(sum(numbers));
        break;
    case "avg":
        console.log(avg(numbers));
        break;
}





