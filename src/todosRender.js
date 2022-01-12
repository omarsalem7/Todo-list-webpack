const render = (todosList) => {
  const sortedTodos = todosList.list.sort((a, b) => a.index - b.index);
  const todosContainer = document.querySelector('.todos');
  let todosHtml = '';
  sortedTodos.forEach((todo) => {
    todosHtml += `  <div class="todo-item">
                        <div>
                            <input type="checkbox" />
                            <input id="${todo.index}" class="todo-edit" type="text" value="${todo.description}" />
                        </div>
                        <button id="${todo.index}" class="remove-btn"> <i class="fas fa-trash"></i></button>
                    </div>
    `;
  });
  todosContainer.innerHTML = todosHtml;

  // remove todo
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      todosList.removeTodo(Number(e.target.parentNode.id));
      element.remove();
    });
  });

  // edit todo
  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      todosList.editTodo(Number(e.target.id), e.target.value);
    });
  });
};

export default render;
