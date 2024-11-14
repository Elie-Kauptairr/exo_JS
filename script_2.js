function factorielle(nombre) {
  let resultat = 1;
  for (let i = nombre; i > 0; i--) {
    resultat *= i;
  }
  return resultat;
}

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log("Le résultat est : " + factorielle(nombre));
