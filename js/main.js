//Определяем действуюшие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

//Делаем расчеты
const currentYear = new Date().getFullYear();
const nextSummer = new Date('June 01 2024 00:00:00');
//Устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCounter() {
    const currentTime = new Date();

    const diff = nextSummer - currentTime;

//Перевод в секунды/минуты/часы/дни

//Перевод в дни
    const daysLeft = Math.floor(diff/ 1000 / 60 /60 / 24);
//Перевод в часы, остаток от деления на 24 = часы
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
//Минут всего, остаток от деления преобразуется в минуты
    const minutesLeft = Math.floor(diff / 1000 / 60 ) % 60;
//Секунд всего, остаток от деления преобразуется в секунды
    const secondsLeft = Math.floor(diff / 1000 ) % 60;
    days.innerText = daysLeft;
    hours.innerText = hoursLeft;
    minutes.innerText = minutesLeft;
    seconds.innerText = secondsLeft;
}
updateCounter();
//Запускаем функцию 1р в секунду
setInterval(updateCounter, 1000);




