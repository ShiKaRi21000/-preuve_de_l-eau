//récupération de donnée
function getArgument () {
    return process.argv[2]
}

//gestion d'erreur
function getValidArguments (argument) {
    if (argument === undefined){
        throw new Error("Erreur: Il faut une chaine de caractère pour la suite du programme")
    }
}

//fonction utilitaire
function testChiffre (argument) {
    let nombre = ""
    for (let i of argument){
        if(!isNaN(i))
        nombre += i
        }
    if(nombre === argument){
        return true
    }
    return false
}


//affichage
function resultat (resultat){
    if (resultat){
        return console.log("La chaine de caractère contient que des chiffres.")
    }
    return console.log("La chaine de caractère ne contient pas que des chiffres")
    }

getValidArguments(getArgument())
resultat(testChiffre(getArgument()))
