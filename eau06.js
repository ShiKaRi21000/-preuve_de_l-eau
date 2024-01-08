function verification_cc(){
    if (Number.isInteger(parseInt(process.argv[2])) ||
        Number.isInteger(parseInt(process.argv[3]))
    ){
        return true
    }
    else {
        return false
    }
}

function majusculeSurDeux(phrase) {
    let resultat = "";
    for (let i = 0; i < phrase.length; i++) {
        let codeAscii = phrase.charCodeAt(i)
        if (i % 2 === 0) {
            if (codeAscii >= 97 && codeAscii <= 122) {
                codeAscii -= 32
            }
        } else {
            if (codeAscii >= 65 && codeAscii <= 90) {
                codeAscii += 32
            }
        }
        resultat += String.fromCharCode(codeAscii)
    }
    return resultat
}

if (verification_cc ()){
    console.log("Error")
}

else{
    console.log(majusculeSurDeux(process.argv[2]))
}