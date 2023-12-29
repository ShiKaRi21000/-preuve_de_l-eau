
function isPrime(n) {

    if (n <= 1) return false

    for (var i = 2; i <= n - 1; i++)
      if (n % i == 0) return false

    return true
}


function nbrPremier (nbr){

    if ((nbr === '') || isNaN(nbr) || (Math.sign(nbr) === -1)){
        console.log( -1)
    }
    else {
        for (var i = nbr + 1; i < (nbr * 4); i++)
            if (isPrime(i)){
                return console.log(i)
        }
    }
}

nbrPremier(parseInt(process.argv[2]))


