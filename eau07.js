function majusculesEnDebutDeMot(chaine) {
    let resultat = "";
    let debutMot = true;

    for (let i = 0; i < chaine.length; i++) {
        let codeAscii = chaine.charCodeAt(i);

        if (debutMot) {
            if (codeAscii >= 97 && codeAscii <= 122) {
                codeAscii -= 32; // Conversion en majuscule
            }
            debutMot = false;
        } else {
            if (codeAscii >= 65 && codeAscii <= 90) {
                codeAscii += 32; // Conversion en minuscule
            }
        }

        resultat += String.fromCharCode(codeAscii);

        // Détermine si le prochain caractère est le début d'un nouveau mot
        if (chaine[i] === ' ' || chaine[i] === '\t' || chaine[i] === '\n') {
            debutMot = true;
        }
    }

    return resultat;
}

// Exemple d'utilisation
let chaineOriginale = process.argv[2];
let chaineModifiee = majusculesEnDebutDeMot(chaineOriginale);
console.log(chaineModifiee);