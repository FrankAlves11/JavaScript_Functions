

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10); 
printOdds(100); 

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let oldEnoughMsg = `Congrats ${userName}! You can Drive!`;
    let tooYoungMsg = `Sorry ${userName}, you are not old enough to drive`;

    if (age < 16) {
        console.log(tooYoungMsg)
    } else {
        console.log(oldEnoughMsg)
    }

}

checkAge("John", 15);
checkAge("Frank", 22);
checkAge("Nate", 77);

// Exercise 3
function checkQuadrant(x, y) {
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
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }

}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(-1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(1, -1));


// Exercise 4
console.log("EXERCISE 3:\n==========\n");

function typeOfTriangle(a, b, c) {
    if (a + b <= c || b + c <= a || c + a <= b) {
        console.log("This is not a valid triangle. ");
    } else if (a == b && a == c && b == c) {
        console.log("This is a equilateral triangle. ")
    } else if (a == b || a == c || b == c ) {
        console.log("This is a Isosceles triangle. ")
    } else if (a !=b && a != c && b != c) {
        console.log("This is a scalene triangle. ")
    }
}

typeOfTriangle(3, 6, 8);

