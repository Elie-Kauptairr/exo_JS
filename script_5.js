const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps, perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let tousEmpruntes = books.every(book => book.rented > 0);
console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?", tousEmpruntes);

let livrePlusEmprunte = books.reduce((max, book) => (book.rented > max.rented ? book : max ));
console.log("Le livre le plus emprunté est : ", livrePlusEmprunte.title);

let livreCherche = books.find(book => book.id === 873495);
console.log("Le livre avec l'ID 873495 est : ", livreCherche.title);

let booksSansLivre = books.filter(book => book.id !== 133712);
console.log("Liste des livres sans celui avec l'ID 133712 :");
console.log(booksSansLivre);

let livresTries = booksSansLivre.sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :");
console.log(livresTries);

