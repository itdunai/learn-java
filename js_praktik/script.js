'use strict';

// const num = 49;

// (num == 50) ? console.log('Ok') : console.log('Error'); 

// Функции Callback =========================

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     } , 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`ya uchu& ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function () {
//     console.log('Ya sdelal');
// });

// =====================================================

// Объекты ===========================

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('test');
//     }
// };

// // options.makeTest();

// const {border, bg} = options.colors;

// console.log(border);

// for (let key in options){
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }

// console.log(Object.keys(options).length);



// Массивы ======================================


// const arr = [1, 2, 3, 6, 8];

// // arr.pop();
// // arr.push(54);

// // // console.log(arr);

// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // for (let value of arr){
// //     console.log(value);
// // }

// // arr.forEach(function(item, i, arr){
// //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // });



// // ====================== SSYLKI ============================


// ///Ссылки
// let obj = {
//     a: 1,
//     b: 2,
//   };
// let copy = obj;
  
//   obj.a = 5;
//   console.log(copy.a);
//   // Результат 
//   // a = 5;

// ------------------

// /// поверхностное копирование
// function copy(mainObj) {
//     let objCopy = {}; // objCopy будет хранить копию mainObj
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]; // копирует каждое свойство objCopy
//     }
//     return objCopy;
// }

// const mainObj = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

//----------------

// console.log(copy(mainObj));
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// console.log(numbers);
// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, numbers);

// clone.c.x = 33;
// // console.log(add);
// // console.log(clone);

//--------

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'aasdqwe';

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// ==================== OOP ==========================

// const soldier = {
//     health: 400,
//     armo: 100,
//     sayHello: function(){
//         console.log('Hello');
//     }
// };

// // const john = {
// //     health: 100
// // };

// const john = Object.create(soldier);

// // john.__proto__ = soldier;

// // Object.setPrototypeOf(john, soldier);

// john.sayHello();


// ================= ТИПИЗАЦИЯ ======================== //

// console.log(typeof(String(null)));

// console.log(typeof(null + ''));


// const num = 5;

// console.log(`https://vk.com/catalog/${num}`);

// const fontSize = 26 + 'px';

// // To number

// console.log(typeof(Number('123')));

// console.log(typeof(+'123'));

// console.log(typeof(parseInt('15px', 10)));

// // To boolean
// console.log(!!'');



// =============== Получение элементов ======================


// =============== События ======================

// const btn = document.querySelector('button'),
//       link = document.querySelector('a');

// const notClick = (e) => {
//     console.log(e.target);
//     e.target.innerHTML = 'red';
//     // btn.removeEventListener('click', notClick);
// };

// btn.addEventListener('click', notClick, {once : true});

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(e.target);
//     link.style.color = 'red';
// });


// ======================== НАВИГАЦИЯ ПО DOM ====================

// const wrapper= document.querySelector('.wrapper'),
//       btns = wrapper.querySelectorAll('button'),
//       first = wrapper.querySelector('.first'),
//       second = wrapper.querySelector('.second');


//     first.style.width = '300px';
//     first.style.float = 'left';
//     first.style.height = '200px';
//     first.style.background = '#cdcdcd';
//     first.style.padding = '50px';
//     first.style.display = 'inline-block';

//     second.style.width = '300px';
//     second.style.height = '200px';
//     second.style.float = 'left';
//     second.style.background = '#cdcdcd';
//     second.style.padding = '50px';
//     second.style.display = 'inline-block';

//     btns.forEach(item => {
//         item.style.padding = '20px';
//         item.style.background = 'yellow';
//         item.innerHTML = 'Clikc me';
//     });

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').parentElement.className);

// for (let node of document.body.childNodes){
//     if (node.nodeName == '#text'){
//         continue;
//     }
//     console.log(node);
// }







// ============================ PRAKTIK ========================

// const presonalMovieDB = {
//         count: 0,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,
//         start: function(){

//             presonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
//             while (presonalMovieDB.count == '' || presonalMovieDB.count == null || isNaN(presonalMovieDB.count)) {
//                 presonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//             }
//         },
//         rememberMyFilms: function() {
//             for (let i = 0; i < 2; i++){
//                 const a = prompt('Один из последних просмотренных фильмов?', ''),
//                       b = prompt('Насколько оцените его?', '');
            
//                 if (a != null && b != null && a != '' && b != '' && a.length < 50){
//                     presonalMovieDB.movies[a] = b;
//                 } else {
//                     console.log('error');
//                     i--;
//                 }
//             }
//         },
//         detectPersonalLevel: function() {
//             if(presonalMovieDB.count < 10){
//                 console.log('Мало посмотрел');
//             } else if (presonalMovieDB.count >= 10 && presonalMovieDB.count < 30) {
//                 console.log('Нормуль');
//             } else if (presonalMovieDB.count >= 30) {
//                 console.log('Конченый');
//             } else {
//                 console.log('ERROR');
//             }
//         },
//         showMyDB: function(hidden) {
//             if (!hidden) {
//                 console.log(presonalMovieDB);
//             }
//         },
//         writeRourGenres: function() { 
//             for(let i = 1; i<=3; i++){
//                 let genre = prompt(`Ваш любимый жанр под номером ${i}?`);

//                 if (genre == '' || genre == null){
//                     console.log('Вы ввели некорртекные данные');
//                     i--;   
//                 } else {
//                     presonalMovieDB.genres[i - 1] = genre;
//                 }   
//             }

//             presonalMovieDB.genres.forEach((item, i) => {
//                 console.log(`Любимый жанр ${i+1} - это ${item}`);
//             });
//         },
//         toggleVisibleMyDB: function(){
//             if (presonalMovieDB.privat){
//                 presonalMovieDB.privat = false;
//             } else {
//                 presonalMovieDB.privat = true;
//             }
//         }

// };


// *************************
