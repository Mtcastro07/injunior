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

//Criação da função authors
function authors() {
  //Criação de um vetor vazio, que irá amazenar o nome dos autores
  let authorsList = [];

  //Uso do loop forEach, que irá acessar cada categoria de booksByCategory
  booksByCategory.forEach(function (categoria) {
    //Acesso do vetor books de cada categoria
    categoria.books.forEach(function (livros) {
      //Verifica se ja há o autor dentro do vetor com o uso da função includes
      if (authorsList.includes(livros.author) == false) {
        authorsList.push(livros.author);
      }
    });
  });
  return authorsList;
}

//Imprimindo no console o array com cada nome dos autores
console.log(authors());
