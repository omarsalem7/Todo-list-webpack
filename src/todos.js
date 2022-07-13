export default class Todos {
  constructor() {
    this.list = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
  }

  setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  addTodo(todo) {
    this.list.push(todo);
    this.setLocalStorage();
  }

  removeTodo(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    this.setLocalStorage();
  }

  editTodo(todoId, todoDescription) {
    this.list = this.list.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    this.setLocalStorage();
  }

  completeTodo(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === todoId);
    this.list[selected].completed = status;
    this.setLocalStorage();
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    this.setLocalStorage();
  }
}
