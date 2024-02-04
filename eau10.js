function getArgument () {
    return process.argv.slice(2)
}


function getValidArguments (arguments) {
    if (arguments.length === 0){
        return false
    }
    return true
}

function valeurDernierIndex(arguments){
    const tableauOriginal = arguments
    const valeurDernierIndex = tableauOriginal[tableauOriginal.length -1]
    return valeurDernierIndex
}

function verificationDesValeurs (){
        const dernierIndex = valeurDernierIndex(getArgument())
        for(let i = 0; i < getArgument().length -2; i++){
            if (dernierIndex === getArgument()[i]){
                return i
            }
        }
        return -1
    }

function resultat(){
    if (getValidArguments(getArgument())){
        return verificationDesValeurs()
    }
    return console.log("Il faut au moins 2 arguments pour que cela fonctionne")
}
console.log(resultat())