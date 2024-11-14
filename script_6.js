const codonsToProteins = {
  "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine", "AGU": "Sérine", "AGC": "Sérine",
  "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
  "UUA": "Leucine", "UUG": "Leucine",
  "UUU": "Phénylalanine", "UUC": "Phénylalanine",
  "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine", "AGA": "Arginine", "AGG": "Arginine",
  "UAU": "Tyrosine", "UAC": "Tyrosine"
};

function decoupeEnCodons(arn) {
  let codons = [];
  for (let i = 0; i < arn.length; i += 3) {
    codons.push(arn.slice(i, i + 3));
  }
  return codons;
}

function traduitARNenProteines(arn) {
  let codons = decoupeEnCodons(arn);
  let proteines = codons.map(codon => codonsToProteins[codon]);
  return proteines.join("-");
}

let arn1 = "CCGUCGUUGCGCUACAGC";
let arn2 = "CCUCGCCGGUACUUCUCG";

console.log("Traduction de l'ARN 1 : ", traduitARNenProteines(arn1));
console.log("Traduction de l'ARN 2 : ", traduitARNenProteines(arn2));
