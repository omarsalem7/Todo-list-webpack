export default class Todos {
  constructor() {
    this.list = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
  }

  addTodo(todo) {
    this.list.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  removeTodo(todoID) {
    this.list = this.list.filter((todo) => todo.id !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  editTodo(todoId, todoDescription) {
    const newData = this.list.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newData));
  }

  completeTodo(todoId, status) {
    const selected = this.list.findIndex((element) => element.id === todoId);
    this.list[selected].completed = status;
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  clearCompletedTodos() {
    this.list = this.list.filter((todo) => !todo.completed);
    this.list.forEach((todo, index) => {
      todo.index = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(this.list));
  }
}
