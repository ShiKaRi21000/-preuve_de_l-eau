
function queDesChiffres (chaineTester) {

    let chiffre = ""

    for (i of chaineTester){
        if (Number.isInteger(parseInt(i))){
            chiffre += i
        }
        else {
            console.log("Error: la chaine de caractère ne contient pas que des chiffres")
            break
        }
    }
}

queDesChiffres (process.argv[2])