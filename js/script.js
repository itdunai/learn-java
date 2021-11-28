/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promos = document.querySelectorAll('.promo__adv img'),
      content = document.querySelector('.promo__content'),
      bg = content.querySelector('.promo__bg'),
      genre = content.querySelector('.promo__genre'),
      filmsList = content.querySelectorAll('.promo__interactive-item'),
      films = movieDB.movies.sort();

promos.forEach(item => {
    item.remove();
});
// for (let i = 0; i < promos.length; i++){
//     promos[i].remove();
// }

genre.innerHTML = 'ДРАМА';
// genre.textContent = 'ДРАМА';

bg.style.cssText = `background: url(img/bg.jpg);background-size:100%`;
// bg.style.backgroundImage = `url(img/bg.jpg)`;


for (let i = 0; i < filmsList.length; i++){
    filmsList[i].innerHTML = `<span></span>${i + 1}. ${films[i]}`;
}

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     filmsList[i].innerHTML = `${i + 1}. ${films[i]}`;
// });