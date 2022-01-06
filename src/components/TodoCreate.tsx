import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useStoreActions, useStoreState } from "../store";

interface buttonProps {
    open: boolean;
}

const InsertFormTemplate = styled.form`
  background-color: #f8f9fa;  
  
  width: 490px;
  bottom: 0;
  height: 0;
  position: absolute;
  
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  padding: 0px 30px 0px 30px;

  transition: 0.125s;
  transition-timing-function: ease-in;

  ${(props: buttonProps) =>
    props.open &&
    css`
        height: 50px;
        padding: 30px 30px 80px 30px;
    `}
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  visibility: hidden;

  ${(props: buttonProps) =>
    props.open ?
    css`
        visibility: visible;
        transition: 0.125s;
        transition-delay: 0.125s;
    `
    :
    css`
        visibility: hidden;
    `
    }
`;

const CreateButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 100;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 70px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  color: white;
  border-radius: 50%;
  border: none;

  transform: translate(-50%, 50%);
  transition: 0.125s all ease-in;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props: buttonProps) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate() {

    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const todos = useStoreState(state => state.todos.todos);
    const createTodo = useStoreActions((actions) => actions.todos.createTodo);

    const onToggle = () => setOpen(!open)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        createTodo({
            id: todos.length > 0 ? (parseInt(todos[todos.length-1].id) + 1).toString() : "0",
            text: inputValue,
            done: false
        });

        setOpen(false)
        setInputValue("")
    }

    return (
        <>
            <InsertFormTemplate onSubmit = {onSubmit} open = {open}>
                <Input 
                    onChange = {onChange}
                    value = {inputValue}
                    placeholder = "내용 입력 후, Enter 를 누르세요"
                    open = {open}
                />
            </InsertFormTemplate>
            <CreateButton onClick = {onToggle} open = {open}> + </CreateButton>
        </>
    )
}

export default TodoCreate