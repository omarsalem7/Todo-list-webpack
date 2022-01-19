const render = (todosList) => {
  const sortedTodos = todosList.list.sort((a, b) => a.index - b.index);
  const todosContainer = document.querySelector('.todos');
  let todosHtml = '';
  sortedTodos.forEach(({ completed, description, id }) => {
    const checkedTodo = completed ? 'checked' : '';
    const checkClass = completed ? 'checked' : '';
    todosHtml += `  <div class="todo-item">
                        <div>
                            <input id="${id}" class="todo-check" type="checkbox" ${checkedTodo} />
                            <input id="${id}" class="todo-edit ${checkClass}" type="text" value="${description}" />
                        </div>
                        <button id="${id}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                    </div>
    `;
  });
  todosContainer.innerHTML = todosHtml;

  // remove todo
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      element.remove();
      todosList.removeTodo(e.target.parentNode.id);
    });
  });

  // edit todo
  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('focusin', (e) => {
      e.target.parentNode.parentNode.style.background = 'rgb(241,240,204)';
      e.target.style.background = 'rgb(241,240,204)';
    });
    todo.addEventListener('focusout', (e) => {
      e.target.style.background = 'white';
      e.target.parentNode.parentNode.style.background = 'white';
    });
    todo.addEventListener('input', (e) => {
      todosList.editTodo(e.target.id, e.target.value);
    });
  });

  // Complete Todo
  const todosCheck = document.querySelectorAll('.todo-check');
  todosCheck.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      todosList.completeTodo(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};

export default render;
