// Exercise 1 Section
const printOdds = (count) => {
    for (let i = 1; i <= Math.abs(count); i++) {
        if(i % 2 != 0) {
            console.log(i * Math.sign(count));
        }
    }
};


printOdds(-10); 
printOdds(10);
// Exercise 2 Section
const checkAge = (name, age) => {
    let oldEnoughMsg = `Congrats ${name}! You are old enough to drive!`;
    let tooYoungMsg = `Sorry ${name}, you are too young to drive ${
        16 - age
    } year(s) until you can drive.`;
    
    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
};
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

//exercise 4
function isValidTriangle(a,b,c) {
    return a + b > c && a + c > b && b + c > a;
}
function isValidTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;
    }     
}

console.log(checkTriangle(2,3,4)); //scalene
console.log(checkTriangle(2,2,2));//equilateral
console.log(checkTriangle(1,2,2)); //isosceles
console.log(checkTriangle(1,1,2)); //invalid

//exercise 5 
const dataUsageFeedback = (planLimit, day, usage) => {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg;
    
    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING"; 
    } else if (currentAvg < projectedAvg) {
        statusMsg = "BELOW";
    } else {
        statusMsg = "AT";
    }
    
    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${projectedAvg.toFixed(2)} GB/day.    
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
        continuing this usage, you'll end up using ${
        planLimit - (usage + projectedUsage)
    } GB from your data limit.
    To stay below your data plan, use no more than ${(
        remainingData /remainingDays
    ).toFixed(2)} GB/day.`);
} 
dataUsageFeedback(50, 10, 25);

// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.
    