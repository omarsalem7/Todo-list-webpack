import './style.css';

const todosList = [
  { description: 'todo2', completed: false, index: 2 },
  { description: 'todo1', completed: false, index: 1 },
];

const render = (list) => {
  const sortedTodos = list.sort((a, b) => a.index - b.index);
  const todosContainer = document.querySelector('.todos');
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    todosHtml += ` <div class="todo-item">
        <input type="checkbox" /><span> ${todo.description}</span>
    </div>`;
  });
  todosContainer.innerHTML = todosHtml;
};

render(todosList);
