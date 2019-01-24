function onReady() {
    const ADD_TODO_FORM = document.getElementById('addToDoForm');
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    const TODO_LIST = document.getElementById('toDoList');

    ADD_TODO_FORM.addEventListener('submit', event => {
        event.preventDefault();
        // get the text //
        let title = NEW_TODO_TEXT.value;
        // create a new li//
        let newLi = document.createElement('li');
        // create new input //
        let checkbox = document.createElement('input');
        // set input's type to checkbox //
        checkbox.type = "checkbox";
        // set the title //
        newLi.textContent = title;
        // attach the checkbox to li //
        newLi.appendChild(checkbox);
        // attach the li to the ul //
        toDoList.appendChild(newLi);
        //empty the input field//
        NEW_TODO_TEXT.value = "";
    });
}


window.onload = function() {
    onReady();
};
