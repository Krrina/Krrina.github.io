"use strict";

  export function getDecimal(num) {
    if (num<0){
        return num - Math.floor(num); //вычитается из num округленное вниз число 
     } else if (num.toString().indexOf(".") !== -1) {    // преобразуем число к строке и проверяем, есть ли в ней точка
             return parseFloat("0." + num.toString().split(".")[1]);  // если есть, то возвращаем дробную часть числа
            } else return 0; // если точки нет, то дробная часть равна 0
 }
  
 export function ucFirst(str){
    if (!str) return str; //если аргумент пустой или его нет, то возвращается без изменений 
    else return str[0].toUpperCase() + str.slice(1); //иначе возвращается строка с замененной первой буквой с помощью метода toUpperCase()
 }

 export function checkSpam(str){
    let lowerStr = str.toLowerCase(); //приводим к нижнему регистру 
    return lowerStr.includes("viagra") || lowerStr.includes("xxx"); //проверяем, метод includes() возвращает true или false 
 }

export function truncate(str){
    
}