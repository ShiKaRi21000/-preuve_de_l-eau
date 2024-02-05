function getArgument () {
    return process.argv.slice(2)
}

function getValidArguments (arguments) {
    if (arguments.length < 1){
        console.log("Ereur: il faut au moins 2 arguments pour ce programme")
        return false
    }
    for (let i = 0; i < arguments.length; i++){
        if (isNaN(arguments[i])){
            console.log("Erreur: il faut que des nombres pour que ce programme fonctionne.")
            return false
        }
    }
    return true
}

function arraySort(array){
    const newArray = array
    newArray.sort((a, b) => a - b)
    return newArray
}

function compareValue (value){
        let differenceArray = []
        for (let i = 0; i < value.length; i++){
            for(let j = 0; j < value.length; j++){
                if(value[i] === value[j]){
                }
                else {
                    let resultat = i - j
                    differenceArray.push(resultat)
                }
            }
            return differenceArray
        }
    }

console.log(compareValue(arraySort(getArgument())))

// function resultat (){
//     if(getValidArguments(getArgument())){
//         return arraySort(compareValue(arraySort(getArgument())))[0]
//     }
// }
// console.log(arraySort(compareValue(arraySort(getArgument()))))

