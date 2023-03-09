// Simple addition
function add(a, b)
{
    return a + b;
}

// Simple subtraction
function subtract(a, b)
{
    return a - b;
}

// Simple multiplication
function multiply(a, b)
{
    return a * b;
}

// Simple division
function divide(a, b)
{
    return a / b;
} 

// Appliying the increment ++
function increment(n = a + 1)
{
    return n = n + 1;
} 

// Appliying the decrement --
function decrement(n = a - 1)
{
    return n = n - 1;
}

// parses n as integer
function makeInt(n)
{
    return parseInt(n, 10);
}

// makeInt as NaN appropiate
function makeInt(a = "Will give me a NaN?")
{
    return parseInt(a , 10);
}

// preserve n's devimals
function preserveDecimal(n)
{
    return parseFloat(n); 
}

// return a NaN from perseFloat
function preserveDecimal(n = "Will this work?")
{
    return parseFloat(n); 
}