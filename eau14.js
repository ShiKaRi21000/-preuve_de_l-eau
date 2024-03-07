function getArgument () {
    return process.argv.slice(2)
}

function getValidArguments (arguments) {
    if (arguments.length < 1){
        console.log("Ereur: il faut au moins 2 arguments pour ce programme")
        return false
    }
    for (let i = 0; i < arguments.length; i++){
        if (!isNaN(arguments[i])){
            console.log("Erreur: il ne faut pas de nombre pour que ce programme fonctionne.")
            return false
        }
    }
    return true
}

function wordToAscii(word){
    let new_word = word[0]
    let asciiArray = []
    for(let i=0; i < new_word.length; i++){
        asciiArray.push(new_word[i].charCodeAt())
    }
    return asciiArray
}


function asciiToWord (array){
    let new_array = array
    let wordArray = []
    for(let i=0; i < new_array.length; i++){
        wordArray.push(String.fromCharCode(new_array[i]))
    }
    return wordArray.join('')
}

function my_bubble_sort(arr){
    let new_array = arr
    for (let i = 0; i < new_array.length; i++) { 
        for (let j = 0; j < (new_array.length - i - 1); j++) {
            if (parseInt(new_array[j]) > parseInt(new_array[j + 1])){
                [new_array[j], new_array[j + 1]] = [new_array[j + 1], new_array[j]]
            }
        }
    }
    return new_array
}

function resolve(arguments){
    let arrayAscii = []
    let arrayWord = []
    for (let i = 0; i < arguments.length; i++){
        arrayAscii.push(wordToAscii([arguments[i]]))
    }
    my_bubble_sort(arrayAscii)
    for (let i = 0; i < arrayAscii.length; i++){
        arrayWord.push(asciiToWord(arrayAscii[i]))
    }
    return arrayWord
}

function resultat(){
    if (getArgument(getArgument())){
        return resolve(getArgument()).join(', ')
    }
}

console.log(resultat())

