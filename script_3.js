let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for (let i = 1; i <= etages; i++) {
  let espace = " ".repeat(etages - i); // Crée les espaces
  let diese = "#".repeat(i);           // Crée les #
  console.log(espace + diese);          // Affiche chaque ligne de la pyramide
}
