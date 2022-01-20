/**
 * @jest-environment jsdom
 */
import Todos from '../todos';

document.body.innerHTML = `
    <div class="container">
    <h1 class="title">Today's Todo</h1>
    <form>
        <input class="input-todo" type="text" placeholder="Add to your List..." autofocus />
        <button class="add-btn">
            <i class="fas fa-location-arrow"></i>
        </button>
    </form>
    <div class="todos">
        <!-- Add Todos Automatically -->
    </div>
    <div class="clear">
        <a class="clear-btn">Clear All</a>
    </div>
    </div>
     `;

describe('add and remove', () => {
  window.localStorage = Storage.prototype;
  test('Add task', () => {
    const todoList = new Todos();
    const newTodo = {
      id: 'id123',
      description: 'task1',
      completed: false,
      index: 1,
    };
    const newTodo2 = {
      id: 'id12sdad3',
      description: 'task2',
      completed: false,
      index: 2,
    };
    todoList.addTodo(newTodo);
    expect(todoList.list).toHaveLength(1);
    todoList.addTodo(newTodo2);
    expect(todoList.list).toHaveLength(2);
    expect(todoList.list[1].description).toBe('task2');
  });

  test('remove task', () => {
    const todoList = new Todos();
    const newTodo = {
      id: 'id4d5sa',
      description: 'task3',
      completed: false,
      index: 3,
    };
    todoList.addTodo(newTodo);
    todoList.removeTodo(newTodo.id);
    expect(todoList.list[1].description).toBe('task2');
    expect(todoList.list).toHaveLength(2);
  });
});

describe('Edit test', () => {
  test('Editing', () => {
    const todoList = new Todos();
    const newTodo3 = {
      id: 'gfgdgrg',
      description: 'task33',
      completed: false,
      index: 3,
    };
    todoList.addTodo(newTodo3);
    todoList.editTodo(newTodo3.id, 'asd');
    expect(todoList.list[2].description).toBe('asd');
    expect(todoList.list).toHaveLength(3);
  });
});

describe('complete test', () => {
  test(' updating an items completed status', () => {
    const todoList = new Todos();
    const newTodo4 = {
      id: 'dasasds5sa',
      description: 'task5',
      completed: false,
      index: 4,
    };
    todoList.addTodo(newTodo4);
    todoList.completeTodo(newTodo4.id, true);
    expect(todoList.list[3].completed).toBeTruthy();
    expect(todoList.list).toHaveLength(4);
  });
});

describe('Clear all completed', () => {
  test('clear items completed', () => {
    const todoList = new Todos();
    todoList.clearCompletedTodos();
    expect(todoList.list).toHaveLength(3);
    expect(todoList.list[1].completed).toBeFalsy();
  });
});
