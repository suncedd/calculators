
let div = document.querySelector('.output'); //элементы интерфейса
let div2 = document.querySelector('.output2');
let div3 = document.querySelector('.output3');
let div4 = document.querySelector('.output4');


let inputIn = document.querySelector('.input-in');
let button1 = document.querySelector('.button1'); // кнопка начать
let button2 = document.querySelector('.button2'); // кнопка 

button1.onclick = function () {
    
   
    let edge = +inputIn.value;  // присваиваем переменной вводимое значение


    
    if(edge!=""){    // проверяем напсианны ли данные в поле
    if ( edge >= 1) { // проверяем данные в поле на отрицательные числа
        inputIn.value = edge;
        div.innerHTML = "Площадь грани " + Math.pow(edge, 2);  // вычисление и вывод площади грани
        div2.innerHTML = "Площадь куба " + 6 * Math.pow(edge, 2);  // вычисление и вывод площади куба
        div3.innerHTML = "Объем " + Math.pow(edge, 3);  // вычисление и вывод объема
    }
    else { // если число отрицательное то выводится ошибка
        alert("введено некорректное число");
        
        div.innerHTML = "Площадь грани";
        div2.innerHTML = "Площадь куба";
        div3.innerHTML = "Объем";
    }}
    else{ // если поле ввода пустое, то выводится ошибка
        alert("Введите данные");
        inputIn.value ="" ;
    }



}
button2.onclick = function () { // Очистка полей
   
    inputIn.value = "   ";
    div.innerHTML = "Площадь грани";
    div2.innerHTML = "Площадь куба";
    div3.innerHTML = "Объем";


}