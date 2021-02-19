const numberOfFilms = +prompt ('Сколько фильмов вы уже просмотерли?', '');
const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt ('Один из последних просмотренных фильмов', ''),
      b = prompt ('На сколько оцениваете его', ''),
      c = prompt ('Один из последних просмотренных фильмов', ''),
      d = prompt ('На сколько оцениваете его', '');
personalMoveDB.movies[a] = b;
personalMoveDB.movies[c] = d;
console.log(personalMoveDB);
