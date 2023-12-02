// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    // Crear el elemento de tarea
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    // Agregar el texto de la tarea
    const taskText = document.createElement('span');
    taskText.textContent = value;
    task.appendChild(taskText);
    // Agregar el botón de eliminar
const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton', 'roundBorder');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
    // Lógica para eliminar la tarea al hacer clic en el botón
        task.remove();
    });
    task.appendChild(deleteButton);
    // Agregar el evento para cambiar el estado al hacer clic en la tarea
    task.addEventListener('click', changeTaskState);
    // Agregar la tarea al contenedor
    tasksContainer.prepend(task);
    // Limpiar el formula
event.target.reset();
};


const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();