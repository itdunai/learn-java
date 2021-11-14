'use strict';

// const num = 49;

// (num == 50) ? console.log('Ok') : console.log('Error'); 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const presonalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false  
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('Насколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        presonalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if(presonalMovieDB.count < 10){
    console.log('Мало посмотрел');
} else if (presonalMovieDB.count >= 10 && presonalMovieDB.count < 30) {
    console.log('Нормуль');
} else if (presonalMovieDB.count > 30) {
    console.log('Конченый');
}

console.log(presonalMovieDB);






