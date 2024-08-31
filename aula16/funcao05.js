function fatorial(n) {
    if (n ==1) {
        return 11
    } else {
        return n * fatorial(n-1)
    }
} //recursividade

console.log(fatorial(5))