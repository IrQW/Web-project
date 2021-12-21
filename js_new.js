for (var n = 0; n < localStorage.length; n++) {
    key = localStorage.key(n);
    var li = document.createElement("li");
    var inputValue = key;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li); //вставка в док
}

//Cоздание крестиков(удаления) для всех элементов списка
var myNodelist = document.getElementsByTagName("LI"); //возвращает коллекцию всех элементов документа с указанным именем тега
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN"); //Создаёт новый элемент с заданным тегом
    var txt = document.createTextNode("\u00D7"); //Создаёт новый текстовый узел с заданным текстом
    span.className = "close";
    span.appendChild(txt);//вставка в span
    myNodelist[i].appendChild(span);//вставка в док
}

//тык на крестик - удаление записи
var close = document.getElementsByClassName("close"); //возвращает коллекцию всех элементов документа с указанным именем класса
var i;
for (i = 0; i < close.length; i++) { // идем по всем крестикам и добавляем им функцию удаления при нажатии
    close[i].onclick = function() {
        for (j = 0; j < close.length; j++){
            if( close[j] === this) {
                localStorage.removeItem(localStorage.key(j));
            }
        }
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// добавление "выполненности"(класс check для li)
var list = document.querySelector('ul'); //возвращает первый элемент (Element) документа, который соответствует указанному селектору
list.addEventListener('click', function(ev) { //регистрирует нажатие по элементу
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// добавление при нажатии энтер
var st = document.getElementById("myInput")
st.addEventListener('keyup', function(event)
{
    if (event.key === 'Enter')
        newElement();
})

function newElement() {
    var li = document.createElement("li"); //создаем элемент списка
    var inputValue = document.getElementById("myInput").value; //берем введеный текст
    var t = document.createTextNode(inputValue); //создает тукст с введенным текстом
    li.appendChild(t); //вставка в li
    if (inputValue === '') {
        alert("Вы должны что-то написать!");
    } else {
        localStorage.setItem(inputValue, localStorage.length);
        document.getElementById("myUL").appendChild(li); //вставка в док
    }
    document.getElementById("myInput").value = ""; //"очищаем" ввод

    //Cоздание крестика(удаления)
    var span = document.createElement("SPAN"); //создаем элемент
    var txt = document.createTextNode("\u00D7"); //создаем элемент
    span.className = "close";
    span.tagName = "i";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            for (j = 0; j < close.length; j++){
                if( close[j] === this) {
                    localStorage.removeItem(localStorage.key(j));
                }
            }
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function del(h, el){
    var div = el.parentElement;
    div.style.display = "none";
    alert(h);
}
