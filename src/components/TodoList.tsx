import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useStoreState } from "../store";

const TodoListBlock = styled.div`
  padding: 20px 32px;
  padding-bottom: 50px;
  overflow-y: auto;
`;

function TodoList() {

    const todos = useStoreState(state => state.todos.todos);

    return (
        <TodoListBlock>
            {
                todos.map(todo => (
                    <TodoItem
                        id = {todo.id}
                        text = {todo.text}
                        done = {todo.done}
                        key = {todo.id}
                    /> 
                ))
            }
        </TodoListBlock>
    )
}

export default TodoList
