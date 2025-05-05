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
checkAge("Fudgie", 12);
checkAge("Queso", 16);
checkAge("Gerardo", 21);

//exercise 3
function checkQuadrant(x,y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X Axis";
    }else {
        return "Y Axis";
    }
}

console.log(checkQuadrant(11,1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1,-11));
console.log(checkQuadrant(1,-11));
console.log(checkQuadrant(0,-11));
console.log(checkQuadrant(11,0));
console.log(checkQuadrant(0,0));