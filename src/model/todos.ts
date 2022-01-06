import { Action, action } from "easy-peasy";

interface Todo {
    id: string;
    text: string;
    done: boolean;
}

export interface TodosModel {
  todos: Todo[];
  createTodo: Action<TodosModel, Todo>;
  deleteTodo: Action<TodosModel, string>;
  checkTodo: Action<TodosModel, string>;
}

const todos: TodosModel = {
  todos: [],
  createTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  deleteTodo: action((state, payload) => {
    state.todos.splice(state.todos.findIndex(todo => todo.id === payload), 1);
  }),
  checkTodo: action((state, payload) => {
    state.todos.map(todo => 
     (todo.id === payload) ? { ...todo, done: !todo.done} : todo
    )
  })
};

export default todos;