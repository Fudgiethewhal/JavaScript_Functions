// Exercise 1 Section
function printOdds(count) {
    if (count < 0) {
        for (let i = 0; i >= count; i--) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 1; i <= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
}

printOdds(-10); 
printOdds(10);
// Exercise 2 Section
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You are old enough to drive!`;
    let tooYoungMsg = `Sorry ${name}, you are too young to drive ${
        16 - age
    } year(s) until you can drive.`;
    
    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}
checkAge("Ben", 12)
checkAge("Seth", 16)