"use strict";

function getSecondsToday() {// функция для получения количества секунд с начала текущего дня
    let now = new Date(); // получаем текущую дату и время
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // создаем новую дату, устанавливая время в начало текущего дня
    let diff = now - start; // разница между текущей датой и началом дня в миллисекундах
    let seconds = Math.floor(diff / 1000); // переводим разницу в секунды и округляем до целого числа
    return seconds;
  }
  
  function formatDate(date) { // функция для форматирования даты
    let day = date.getDate();
    if (day < 10) day = '0' + day; // добавляем ведущий ноль, если число меньше 10
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month; // добавляем ведущий ноль, если число меньше 10
    let year = date.getFullYear() % 100; // получаем две последние цифры года
    if (year < 10) year = '0' + year; // добавляем ведущий ноль, если число меньше 10
    return day + '.' + month + '.' + year;
  }

  console.log(getSecondsToday());
  console.log(formatDate(new Date()));