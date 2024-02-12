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

function my_bubble_sort(arr){
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    console.log(arr)
}

function resultat(){
    if (getValidArguments(getArgument())){
        return my_bubble_sort(getArgument())
    }
}

console.log(resultat())