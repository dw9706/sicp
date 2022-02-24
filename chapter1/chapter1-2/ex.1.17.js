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


function times(ret, a, b) {
    return b === 0 ? ret
           : is_even(b) ? times(ret, double(a), halve(b))
           : times(ret+a, a, b-1);
}

function fast_times(a,b){
    return times(0,a,b);
}

console.log(fast_times(2, 10));