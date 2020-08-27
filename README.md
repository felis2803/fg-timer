# Что это?
Таймер.

# Установка.
```
npm i fg-timer
```

# Инициализация и использование
```js
const fgTimer = require('fg-timer');

// timer1 - объект класса Timer, оснащенный функциями stop и restart
let timer1 = new fgTimer(1000, console.log, 'Таймер', 1, 'завершен');

// timer2 - промис; не имеет дополнительных функций
// будет разрешен по истечении указанного количества миллисекунд
let timer2 = new fgTimer(1000);

(async function(){
    await timer2;
    console.log('Таймер 2 завершен');
})();
```

## new fgTimer(timeout[, callback[, ...args]])
- **timeout** \<number>: количество миллисекунд по истечении которых таймер завершится;
- **callback** \<function>: функция обратного вызова; если она не задана, то вместо таймера будет возвращен промис, который будет выполнен по истечении **timeout**;
- **args**: аргументы, которые будут переданы функции обратного вызова.

## timer.stop()
Остановка таймера.

## timer.restart([timeout])
- **timeout** \<number>: если этот параметр задан, то он будет использован для обратного отсчета; если нет, будет использован тот **timeout**, что был установлен ранее.

Перезапуск таймера. Отсчет времени будет начат заново вне зависимости от того, был ли предыдущий отсчет завершен.