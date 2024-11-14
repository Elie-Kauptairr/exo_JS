const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Entrepreneurs nés dans les années 70 :");
let seventies = entrepreneurs.filter(personne => personne.year >= 1970 && personne.year < 1980);
console.log(seventies);

console.log("Liste des noms et prénoms des entrepreneurs :");
let nomsPrenoms = entrepreneurs.map(personne => personne.first + " " + personne.last);
console.log(nomsPrenoms);

console.log("Âge actuel de chaque entrepreneur :");
let ages = entrepreneurs.map(personne => {
  return { first: personne.first, last: personne.last, age: 2024 - personne.year };
});
console.log(ages);

console.log("Entrepreneurs triés par nom de famille :");
let triAlphabetique = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
console.log(triAlphabetique);
