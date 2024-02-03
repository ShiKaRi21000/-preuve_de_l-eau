//récupération de donnée
function getArgument () {
    return process.argv.slice(2)
}

function min(){
    if(getArgument()[0] < getArgument()[1]){
        return getArgument()[0]
    }
    return getArgument()[1]
}

function max() {
    if(getArgument()[0] > getArgument()[1]){
        return getArgument()[0]
    }
    return getArgument()[1]
}


//gestion d'erreur
function getValidArguments (nombres) {
    if (nombres.length != 2){
        console.log("Erreur: Il faut 2 arguments pour la suite du programme")
        return false
    }
    if (isNaN(parseInt(nombres[0])) || isNaN(parseInt(nombres[1]))){
        console.log("Erreur: Il faut 2 nombres pour la suite du programme")
        return false
    }
    return true
}

//résolution

function minVersMax (){
    let resultat = ""
    for(let i = min(); i < max(); i++){
        resultat += i
        resultat += " "
    }
    console.log(resultat)
}

//affichage

getValidArguments(getArgument())
minVersMax()