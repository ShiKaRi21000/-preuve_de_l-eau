
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
        if (chiffre === chaineTester) {
            console.log ("La chaine de caractère ne contient que des chiffres.")
        }
    }

if (process.argv[2] === ""){
    console.log("Error: la chaine de caractère est vide")
}

else {
    queDesChiffres (process.argv[2])
}