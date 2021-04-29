//Read arguments from command line
const args = process.argv.slice(2)

//handle each digit with a map
const digitToString = (digit) =>{ 
    const wordMap = new Map()
    wordMap.set("1","One")
    wordMap.set("2","Two")
    wordMap.set("3","Three")
    wordMap.set("4","Four")
    wordMap.set("5","Five")
    wordMap.set("6","Six")
    wordMap.set("7","Seven")
    wordMap.set("8","Eight")
    wordMap.set("9","Nine")
    wordMap.set("0","Zero")
    return(
      wordMap.get(digit)
    )
}

//concatenate outputs of each digit to string conversion
const fullNumberToString = (num) =>{
    const eachDigit = num.split("")
    const outputNumberString = eachDigit.reduce(
        (output,element) => {
            return( output + digitToString(element))
        },
    "");
    return (outputNumberString)
}

//concatenate output of each number in argument array with correct formatting
let finalOutput = args.reduce(
    (output,element) => {
        return(output + fullNumberToString(element) + ",")
    },
"");

//remove final comma from string
finalOutput = finalOutput.slice(0,-1)

//output final answer
console.log(finalOutput)
