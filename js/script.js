'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const presonalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false  
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько оцените его?', '');


presonalMovieDB.movies[a] = b;
presonalMovieDB.movies[c] = d;

console.log(presonalMovieDB);




