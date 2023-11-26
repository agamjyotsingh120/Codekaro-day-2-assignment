// Assignment 1 

console.log("Assignment 1 starts here!!");
function printnumber(num){
if (num>0){
    console.log("The number is positive");
    }
    else if (num < 0){
        console.log("The number is negative");
            }
            else{
                console.log("The number is zero");
            }
            }
            printnumber(5);
            printnumber(-7);
            printnumber(0);

            // Assignment 2

            console.log("Assignment 2 starts here!!")
            function factorial(num){
                let factorial = 1;

                for (let i = 1; i<= num; i++){
                    factorial *=i;
                }
                return factorial;
            }
            console.log(factorial(5));
            console.log(factorial(8));
            console.log(factorial(0));

            //Assignment 3

            console.log("Assignment 3 starts here!!")
            function max(a, b) {
                if (a > b) {
                    return a;
                } else {
                    return b;
                }
            }
            
            console.log(max(5, 10) + " is the larger number!!"); // 10
            console.log(max(-7, 0) + " is the larger number!!"); // 0
            console.log(max(3, 3) + " is the larger number!!"); // 3

            //Assignment 4

            console.log("Assignment 4 starts here!!")
            function isPalindrome(str) {
                str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
                let reversedStr = str.split('').reverse().join('');
                return str === reversedStr;
            }
            
            console.log(isPalindrome('racecar')); // true
            console.log(isPalindrome('hello')); // false
            console.log(isPalindrome('Able was I ere I saw Elba')); // true

            //Assignment 5

            console.log("Assignment 5 starts here!!")
            function printPrimes(num) {
                if (num < 2) {
                    return;
                }
            
                // Create an array of boolean values to store whether each number is prime
                let isPrime = Array(num + 1).fill(true);
                isPrime[0] = false;
                isPrime[1] = false;
            
                // Loop through the numbers up to the square root of num to find prime numbers
                for (let i = 2; i <= Math.sqrt(num); i++) {
                    if (isPrime[i]) {
                        // Mark all multiples of the current number as non-prime
                        for (let j = i * i; j <= num; j += i) {
                            isPrime[j] = false;
                        }
                    }
                }
                 // Print all prime numbers
    for (let i = 2; i <= num; i++) {
        if (isPrime[i]) {
            console.log(i);
        }
    }
}

printPrimes(20); // Output: 2, 3, 5, 7, 11, 13, 17, 19
            
            
            // Assignment 6

            console.log("Assignment 6 starts here!!")
            function calculate(num1, num2, operator) {
                if (operator === '+') {
                    return num1 + num2;
                } else if (operator === '-') {
                    return num1 - num2;
                } else if (operator === '*') {
                    return num1 * num2;
                } else if (operator === '/') {
                    if (num2 === 0) {
                        throw new Error('Division by zero is not allowed.');
                    } else {
                        return num1 / num2;
                    }
                } else {
                    throw new Error('Invalid operator.');
                }
            }
            
            console.log(calculate(5, 3, '+')); // 8
            console.log(calculate(7, 2, '-')); // 5
            console.log(calculate(4, 3, '*')); // 12
            console.log(calculate(12, 4, '/')); // 3
                   
        // Assignment 7

        console.log("Assignment 7 starts here!!")
        function CountVowels(str){
            let count = 0;
            const vovels = 'aeiou';

            for(let i = 0; i < str.length; i++){
                if(vovels.includes(str[i])){
                    count++;
                }
            }
            return count;
        }

        console.log(CountVowels('Hello World'));
        console.log(CountVowels("'AEIOU"));
        console.log(CountVowels("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));

        // Assignment 8 

        console.log("Assignment 8 starts here!!");

        function isPerfectNumber(num) {
            if (num < 1) {
                return false;
            }
        
            let sum = 0;
        
            for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
                if (num % i === 0) {
                    if (num / i === i) {
                        sum += i;
                    } else {
                        sum += i;
                        sum += num / i;
                    }
                }
            }
        
            return sum === num;
        }
        
        console.log(isPerfectNumber(6)); 
        console.log(isPerfectNumber(28));
        console.log(isPerfectNumber(12));
        console.log(isPerfectNumber(1)); 

        //Assignment 9

        console.log("Assignment 9 starts here")

        
function printFibonacciSeries(num) {
    if (num <= 0) {
        return;
    }

    let firstNumber = 0;
    let secondNumber = 1;

    while (secondNumber <= num) {
        console.log(secondNumber);

        const nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
}

printFibonacciSeries(10); 

//Assignment 10

console.log("Assignment 10 starts here!!");


function printMultiplicationTable(num) {
    if (num <= 0) {
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

printMultiplicationTable(5);