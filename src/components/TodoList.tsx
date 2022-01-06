import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  padding: 20px 32px;
  padding-bottom: 50px;
  overflow-y: auto;
`;

const todoItems = [
    {
        id: "0",
        text: "커피 마시기",
        done: true
    },
    {
        id: "1",
        text: "산책하기",
        done: false
    },
    {
        id: "2",
        text: "타입스크립트 공부하기",
        done: false
    }
]

function TodoList() {
    return (
        <TodoListBlock>
            {
                todoItems.map(todo => (
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
