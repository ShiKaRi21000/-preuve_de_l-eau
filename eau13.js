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
    let new_array = arr
    for (let i = 0; i < new_array.length - 1; i++){
        let min = i
        for (let j = i + 1; j < new_array.length; j++){
            if (parseInt(new_array[j]) < parseInt(new_array[min])){
                min = j
            }
        }
        [new_array[min], new_array[i]] = [new_array[i], new_array[min]]
    }
    return new_array
}

function resultat(){
    if (getValidArguments(getArgument())){
        return my_bubble_sort(getArgument())
    }
}

console.log(resultat())