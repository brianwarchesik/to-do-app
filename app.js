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
        // create delete button //
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "—";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener('click', function(event) {
            // console.log(event); //
            TODO_LIST.removeChild(this.parentElement);
        });

        // set input's type to checkbox //
        checkbox.type = "checkbox";
        // set the title //
        newLi.textContent = title;
        // attach delete button to li //
        newLi.prepend(deleteBtn);
        // attach the checkbox to li //
        newLi.prepend(checkbox);
        // attach the li to the ul //
        toDoList.appendChild(newLi);
        //empty the input field//
        NEW_TODO_TEXT.value = "";
    });
}


window.onload = function() {
    onReady();
};
