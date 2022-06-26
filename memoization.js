let prevValues = []

function square(n) {
    if (prevValues[n] != null) {
        return prevValues[n]
    }
    let result = 0;
    for(let i = 1; i<=n; i++) {
        for(let j = 1; j<=n; j++) {
            result += 1
        }   
    }
    prevValues[n] = result
    return result
}
console.log("test")

// console.log(square(70000))
// console.log(square(70000))
// console.log(square(70000))
// console.log(square(70000))

// WRITE A FIBONACCI FUNCTION 
// 1, 1, 2, 3, 5, 8, 13



function fib(n) {
    console.log(n, 'number');
    if(n <= 2) {
        return 1
    } else {
        console.log(fib(n - 1) + fib(n - 2), 'fibonacci');
        return fib(n - 1) + fib(n - 2);
    }
}

//RETURN FIB(3) + FIB(2) => 1 + 
console.log(fib(4))