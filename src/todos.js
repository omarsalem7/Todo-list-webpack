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
    this.list = this.list.filter((todo) => todo.index !== todoID);
    this.list.forEach((todo, index) => {
      todo.index = index;
    });
    console.log(this.list);
    localStorage.setItem('todos', JSON.stringify(this.list));
  }

  editTodo(todoId, todoDescription) {
    const newData = this.list.map((todo) => {
      if (todo.index === todoId) {
        return { ...todo, description: todoDescription };
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(newData));
  }
}
