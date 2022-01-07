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
  updateTodo: Action<TodosModel, Todo>
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
    state.todos = state.todos.map(todo => 
     (todo.id === payload) ? { ...todo, done: !todo.done } : todo
    )
  }),
  updateTodo: action((state, payload) => {
    state.todos = state.todos.map(todo => 
     (todo.id === payload.id) ? { ...todo, text: payload.text } : todo
    )
  }),
};

export default todos;