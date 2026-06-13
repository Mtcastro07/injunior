const booksByCategory = [
  {
    category: "Romance",

    books: [
      {
        title: "O Sol Também é Uma Estrela",
        author: "Nicola Yoon",
      },
      {
        title: "O Noivo da Minha Melhor Amiga",
        author: "Emily Gin",
      },
      {
        title: "Orgulho e Preconceito",
        author: "Jane Austen",
      },
    ],
  },

  {
    category: "Fantasia",

    books: [
      {
        title: "Harry Potter e a Pedra Filosofal",
        author: "J.K. Rowling",
      },
      {
        title: "O Hobbit",
        author: "J.R.R. Tolkien",
      },
      {
        title: "Eragon",
        author: "Christopher Paolini",
      },
      {
        title: "O Nome do Vento",
        author: "Patrick Rothfuss",
      },
    ],
  },

  {
    category: "Suspense",

    books: [
      {
        title: "A Garota no Trem",
        author: "Paula Hawkins",
      },
      {
        title: "O Silêncio dos Inocentes",
        author: "Thomas Harris",
      },
    ],
  },

  {
    category: "Ficção Científica",

    books: [
      {
        title: "Duna",
        author: "Frank Herbert",
      },
      {
        title: "Neuromancer",
        author: "William Gibson",
      },
      {
        title: "Fundação",
        author: "Isaac Asimov",
      },
      {
        title: "1984",
        author: "George Orwell",
      },
      {
        title: "O Fim da Infância",
        author: "Arthur C. Clarke",
      },
    ],
  },
];

//Criação da função countBooksInCategory
function countBooksInCategory() {
  //Criação do objeto que irá armazenar a contagem de livros por categoria
  let booksCounted = {};

  //Uso do loop forEach para que seja visto cada categoria
  booksByCategory.forEach(function (categoria) {
    //Uso de um contador count para realizar a contagem dos livros, reiniciada a cada volta do loop
    let count = 0;

    //Uso de um loop forEach para contar, incrementando no count, cada um dos elementos de cada vetor books em cada categoria
    categoria.books.forEach(function (livros) {
      count += 1;
    });

    //Adicionando a chave, definida pelo nome da categoria, com o valor vindo do count
    booksCounted[categoria.category] = count;
  });
  return booksCounted;
}

//Imprime o objeto booksCounted, com cada chave determinada pelo nome de sua categoria, com o valor da quantidade de livros em sua categoria
console.log(countBooksInCategory());
