import './style.css';
import render from './todosRender';
import Todos from './todos';

const todosList = new Todos();
render(todosList);

const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
  const description = document.querySelector('.input-todo').value.trim();
  const completed = false;
  const index = todosList.list.length + 1;
  const newTodo = { description, completed, index };
  if (description) {
    todosList.addTodo(newTodo);
    render(todosList);
  }
});
