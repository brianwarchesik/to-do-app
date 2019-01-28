function onReady() {
    const ADD_TODO_FORM = document.getElementById('addToDoForm');
    let toDos = [];
    let id = 0;

    function renderTheUI() {
        const TODO_LIST = document.getElementById('toDoList');

        TODO_LIST.textContent = "";

        toDos.forEach(function(toDo) {
            const NEW_LI = document.createElement('li');
            const CHECKBOX = document.createElement('input');
            CHECKBOX.type = "checkbox";

            const DELETE_BTN = document.createElement('button');
            DELETE_BTN.textContent = "–";
            DELETE_BTN.classList.add('deleteBtn');

            DELETE_BTN.addEventListener('click', event => {
                toDos = toDos.filter(function(item) {
                    return item.id !== toDo.id;
                })
                renderTheUI();
            });

            NEW_LI.textContent = toDo.title;
            NEW_LI.prepend(DELETE_BTN);
            NEW_LI.prepend(CHECKBOX);

            TODO_LIST.appendChild(NEW_LI);
        });
    }

    function createNewToDo() {
        const NEW_TODO_TEXT = document.getElementById('newToDoText');
        if (!NEW_TODO_TEXT.value) {
            return;
        }
        toDos.push({
            title: NEW_TODO_TEXT.value,
            complete: false,
            id: id
        });

        id++

        newToDoText.value = '';
        renderTheUI();
    }

    ADD_TODO_FORM.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    })

    renderTheUI();
}


window.onload = function() {
    onReady();
};
