// SICP JS 1.2.4

function double(x){
    return x * 2;
}

function halve(x){
    return x / 2;
}

function is_even(n) {
    return n % 2 === 0;
}

function times(a, b) {
    return b === 0 ? 0
           : is_even(b) ? double(times(a, halve(b)))
           : a + times(a, b - 1);
}

console.log(times(2, 10));

//반복프로세스와 계산 방향 반대.