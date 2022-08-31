const readline = require("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let answer = num1 + num2


r1.question(`what is ${num1} +${num2} ? \n`,
    (userInput) => {
        console.log(userInput)
        if (userInput.trim() == (answer)) {
            r1.close()
        } else {
            r1.setPrompt("Incorrect resonse please try again\n")
            r1.prompt();
            r1.on("line",
                (userInput) => {
                    if (userInput.trim() == answer) {
                        r1.close()
                    } else {
                        r1.setPrompt(`your anwser of ${userInput } is incorrent `)
                        r1.prompt()
                    }
                })
        }
    }
);
r1.on("close", () => [
    console.log("Correct !!!")
]);
r1.on("line", () => {
    console.log("the user have prompt have requested a file from the system so what do you wants us tod ?")
})