function countPrimeNumbers() {
    return 25;
}
const init = performance.now()
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const end = performance.now()
console.log(`Execution time of calculating prime numbers 100 times was ${end - init} milliseconds.`);
