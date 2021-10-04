
/* 
Сделать таблицу умножения, используя DOM createElement и innerText. Создайте таблицу, вложенные 
строки и ячейки в циклах. Должно получится 
что-то вроде этого: */


let root = document.querySelector('.root');

for (let i = 0; i < 10; i++){

    let tr = document.createElement('tr');
    
    root.append(tr);
    
    for (let k = 0; k < 10; k++){

        let td = document.createElement('td');
        
        if (i === 0) {
            td.innerText = k;
            tr.append(td);
        } else if (k === 0) {
            td.innerText = i;
            tr.append(td);
        } else {
            td.innerText = i * k;
            tr.append(td);
        }  
    }
} 

/* Подсветить ячейку над которой находится курсор мыши.
 Используйте события mouseover и mouseout, 
 и style.backgroundColor для подсветки.
 */

let td = document.querySelectorAll('td');

td.forEach((i) => {
    i.onmouseover = () => i.style.backgroundColor = 'yellow';
    i.onmouseout = () => i.style.backgroundColor = '';
})
/* 
Подсветить строку и столбец,
в которой находится подсвеченная ячейка. Используйте parentElement (родительский элемент элемента DOM), и список его детей: children.
Читкоды:
в обработчик события в качестве this передается элемент, на котором событие произошло;
у td есть свойство cellIndex, в котором лежит номер ячейки;
у tr, аналогично есть свойство rowIndex - номер строки; */



td.forEach((item, i) => {
    item.onmouseover = () => {
       item.style.backgroundColor = 'yellow'; 
       item.parentNode.style.backgroundColor = 'green';
       console.log(item.cellIndex);
       console.log(i);
       
    } 

    item.onmouseout = () => {
        item.style.backgroundColor = '';
        item.parentNode.style.backgroundColor = '';
    }
})


/* Calc
Сделайте ваш калькулятор из первых занятий используя DOM и элементы 
input (в т. ч. type="number" для чисел) Каждому полю ввода присвойте 
тот или иной id для обращения в обрабочтике события.
Для запуска раcчета используйте, например <button id="calc"> и
calc.onclick = function(){
    alert((+someIdOfInput1.value) + (+someIdOfInput2.value)) 
    //просуммировали два поля ввода с id someIdOfInput1 и someIdOfInput2 
}
Также можете создать поле ввода для результата и записывать результат в value этого поля.
 */

let inputCurrency = document.querySelector('#first'),
    usd = document.querySelector('#usd'),
    eur = document.querySelector('#eur'),
    btn = document.querySelector('.btn')
    out = document.querySelector('#second');

    let ratios = {
        usd: 25.6,
        eur: 29
    }   

btn.addEventListener('click', () => {
    if (usd.checked) {
        console.log(inputCurrency.value * ratios.usd);
        out.value = inputCurrency.value * ratios.usd;
    }
    else if (eur.checked){
        out.value = inputCurrency.value * ratios.eur;
    } else {
        out.placeholder = 'Choose currency';
    }
})


