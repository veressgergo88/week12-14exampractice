type Movie = {
  title: string;
  genre: string;
  originalLanguage: string;
  length: number;
};

let movieList1 = [
  {
    title: "Titanic",
    genre: "drama",
    originalLanguage: "english",
    length: 180,
  },
  {
    title: "Ace Ventura",
    genre: "comedy",
    originalLanguage: "english",
    length: 86,
  },
  {
    title: "No Hard Feelings",
    genre: "comedy",
    originalLanguage: "english",
    length: 103,
  },
];

let movieList2 = [
  {
    title: "Asteroid City",
    genre: "comedy",
    originalLanguage: "english",
    length: 105,
  },
  {
    title: "Taxi",
    genre: "comedy",
    originalLanguage: "france",
    length: 89,
  },
  {
    title: "Ruby & Quentin",
    genre: "comedy",
    originalLanguage: "france",
    length: 85,
  },
];

let movieList3 = [
  {
    title: "The Matrix",
    genre: "action",
    originalLanguage: "english",
    length: 136,
  },
  {
    title: "The Matrix Reloaded",
    genre: "action",
    originalLanguage: "english",
    length: 138,
  },
  {
    title: "The Matrix Revolutions",
    genre: "action",
    originalLanguage: "english",
    length: 129,
  },
];

function getLongestEnglishComedy(movies: Movie[]): string | null {
  let result: string | null = "";

  let i = 0;
  let comedyMaxLength = 0;
  while (movies[i] !== undefined) {
    if (
      movies[i].genre === "comedy" &&
      movies[i].originalLanguage === "english"
    ) {
      if (comedyMaxLength < movies[i].length) {
        comedyMaxLength = movies[i].length;
      }
    }
    i++;
  }

  let y = 0;
  while (movies[y] !== undefined) {
    if (
      movies[y].genre === "comedy" &&
      movies[y].originalLanguage === "english" &&
      movies[y].length === comedyMaxLength
    ) {
      return (result = movies[y].title);
    }
    y++;
  }
  return null;
}

let result1: string | null = getLongestEnglishComedy(movieList1);
let result2: string | null = getLongestEnglishComedy(movieList2);
let result3: string | null = getLongestEnglishComedy(movieList3);

console.log(result1);
console.log(result2);
console.log(result3);

export {};
