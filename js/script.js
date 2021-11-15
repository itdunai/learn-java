'use strict';

// const num = 49;

// (num == 50) ? console.log('Ok') : console.log('Error'); 

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const presonalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false  
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('Насколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            presonalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if(presonalMovieDB.count < 10){
        console.log('Мало посмотрел');
    } else if (presonalMovieDB.count >= 10 && presonalMovieDB.count < 30) {
        console.log('Нормуль');
    } else if (presonalMovieDB.count >= 30) {
        console.log('Конченый');
    } else {
        console.log('ERROR');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(presonalMovieDB);
    }
}


showMyDB(presonalMovieDB.privat);

function writeRourGenres() {
    for(let i = 1; i<=3; i++){
        presonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}

writeRourGenres();