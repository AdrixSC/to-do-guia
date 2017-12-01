var account = 1;
var container = document.getElementById('tasks');
var submitButton = document.getElementById('submit-button');




var remove = function() {
    console.log(this);
    this.parentNode.remove();
    //this.parentElement.remove();
}

var taskAdd = function(event) {
    event.preventDefault();

    var task = document.getElementById('mesagge');
//creamos elementos basados en la estructura del html
    var article = document.createElement('article');
    var label = document.createElement('label');
    var input = document.createElement('input');
    var button = document.createElement('button');

    var id = 'check' + account;
//agregamos atributos al los elementos de article
    input.type = 'checkbox'; // esta forma es igual a hacer lo sig: checkbox.setAttribute ("type","checkbox")
    input.addEventListener('click', throughTask);
    input.id = id;

    label.setAttribute('for', id);
    label.textContent = task.value;

    button.type = 'button';
    button.innerText = 'x';
    button.addEventListener('click', remove);

    //agregar atributos al padre que es el article

    article.appendChild(input);
    article.appendChild(label);
    article.appendChild(button);

    container.appendChild(article);
    account++;

    task.value = " ";
};

var throughTask = function() {
    var checked = this.checked;
    console.log(checked);
    var text = this.nextSibling; //metodo para tachar el texto del checked
    console.log(text);
    if (checked) {
        text.style.textDecoration = 'line-through';
    } else {
        text.style.textDecoration = 'none';
    }
};

submitButton.addEventListener('click', taskAdd);
