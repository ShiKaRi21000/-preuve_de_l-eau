function rechercheMot(motPrincipal, motRecherche) {
    for (let i = 0; i <= motPrincipal.length - motRecherche.length; i++) {
        let sousChaine = motPrincipal.substring(i, i + motRecherche.length)
        if (sousChaine === motRecherche) {
            return true
        }
    }
    return false
}

// fonction substring va chercher depuis l'indice i du mot principal la cohérence des caractères,
// jusqu'a l'indice i + la longueur du mot recherché et comparer la sous chaine avec le mot recherché.

function verification_cc(){
    if (Number.isInteger(parseInt(process.argv[2])) || Number.isInteger(parseInt(process.argv[3]))){
        return true
    }
    else {
        return false
    }
}


if (verification_cc()){
    console.log("Error")
}

else {
    if (rechercheMot(process.argv[2], process.argv[3])) {
        console.log("Le mot commun trouvé.")
    } else {
        console.log("Le mot n'est pas trouvé.")
    }
}