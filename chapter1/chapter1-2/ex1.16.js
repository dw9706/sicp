
// SICP JS 1.2.4

function square(x) {
    return x * x;
}

function is_even(n) {
    return n % 2 === 0;
}


function fast_expt_iter(a, b, n) {
    return n === 1
    ? a
    : is_even(n)
    ? fast_expt(square(b), b, n / 2)
    : b * fast_expt(b, n - 1);
}

function fast_expt(b,n){
    return fast_expt_iter(1,b,n)
}

console.log(fast_expt(3, 4));