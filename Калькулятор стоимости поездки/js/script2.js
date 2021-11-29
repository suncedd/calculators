

let inputIn = document.querySelector('.input-in'); // элементы интерфейса
let inputIn2 = document.querySelector('.input-in2'); 
let inputIn3 = document.querySelector('.input-in3'); 
let button1 = document.querySelector('.button1'); 
let button2 = document.querySelector('.button2');
let div = document.querySelector('.out');

button1.onclick = function () {
   
   
    let distance = +inputIn.value; // присваиваем переменные
    let gas = +inputIn2.value;
    let litr = +inputIn3.value;
    let cena;
    cena = (gas/100)*distance*litr; // формула итога
  
if( distance !="" && gas!="" && litr!="") // если поля не пустые, то к выводу
{
    
    if ( distance >= 1 &&  gas >= 1 &&  litr >= 1) // если значения в полях больше или равны 1, то вывод
    {
        
        div.innerHTML = "Поездка будет стоить "+ cena + " Рублей"; // вывод итога
        
    }
    else {
        if( distance<=-1 || gas<=-1 || litr<=-1){ // вывод ошибки если введенные данные меньше или равны -1
            alert("Число некорректное")
        }
           
        div.innerHTML = "Поездка будет стоить";
    }
  
}
else
{
 if(distance ==""|| gas ==""|| litr =="") // вывод ошибки если поля для ввода пустые
 {  
    alert("Поля пустые")
 }
}
    
}
button2.onclick = function () { // очистка полей
 
    inputIn.value = "   ";
    inputIn2.value = "   ";
    inputIn3.value = "   ";
    div.innerHTML = "Поездка будет стоить";
    


}