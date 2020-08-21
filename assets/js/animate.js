// var typed = new Typed('.element', {
//     strings: ["Павел, Юля, Когда мы уже пойдем пить водку?", "Я вас люблю:)"],
//     typeSpeed: 100
//   });

var typed = new Typed('.element', {
    strings: ["Ура! Мы идём пить водку", "Love :) ❤❤❤"], // строки для вывода
    stringsElement: null, // вывод текста с использованием html-элементов, к примеру тег <p>
    typeSpeed: 55, // скорость имитации набора текста
    startDelay: 30, // длительность паузы перед началом печати
    backSpeed: 15, // скорост затирания текста
    shuffle: false, // строки в перемешку
    backDelay: 500, // длительность паузы перед стиранием текста
    loop: false, // цикличное повторение
    loopCount: false, // количество итерации, false - бесконечно
    showCursor: false, // показ курсора при наборе
    cursorChar: "...", // символ в качестве курсора
    attr: null, // смена текста в атрибуте (null — текст в самом элементе)
    contentType: 'html', // Формат текста html/text
    callback: function () {}, // обработчик события по завершению печати
    preStringTyped: function () {}, // обработчик события перед началом печати
    onStringTyped: function () {}, // обработчик события для каждой напечатанной строки
    resetCallback: function () {} // обработчик события при сбросе $(".element").typed('reset')
});