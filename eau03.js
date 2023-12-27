function fibonacci(nbr) {

   let n1 = 0
   let n2 = 1
   let somme = 0

   for (let i = 2; i <= nbr;i++){
    somme = n1 + n2
    n1 = n2
    n2 = somme
   }
   console.log(n2)
}

if ((process.argv[2] === '') || isNaN(process.argv[2]) || (Math.sign(process.argv[2]) === -1)){
    console.log("-1")
}

else {
    fibonacci(process.argv[2])
}
