function getPrimes(n) {
//first of all catch edge cases
    if(typeof(n) !== "number" || n < 2){
      return []
    }
//then we initialize our variables that will help in filtering the values
    var filter = [];
    var i = []
    var j = []
    primeNumbers = []
//loop from 2 to n and filter out the primenumbers
    for (i = 2; i <= n; ++i) {
        if (!filter[i]) {
            primeNumbers.push(i);
            for (j = i << 1; j <= n; j += i) {
                filter[j] = true;
            }
        }
    }
    return primeNumbers;
}

exports.getPrimes = getPrimes