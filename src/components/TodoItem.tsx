import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdModeEdit, MdOutlineCheckBox, MdDelete } from "react-icons/md";
import { useStoreActions } from "../store";

interface props {
  id: string;
  text: string;
  done: boolean;
  key: string;
}
interface checked {
  done: boolean;
}
interface buttonType {
  buttonType: string;
}

const Actions = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  color: #dee2e6;
`;

const ActionButton = styled.button`
  margin-right: 3px;
  border: none;
  background-color: white;
  font-size: 20px;
  color: #495057;
  cursor: pointer;

  ${(props: buttonType) =>
    props.buttonType === "primary" ?
    css`
      &:hover {
        color: #38d9a9;
      }
    ` :
    css`
      &:hover {
        color: #ff6b6b;
      }
      `
    }
`;

const Input = styled.input`
  font-size: 16px;
  padding: 5px 0px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 381px;
  outline: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 0px;
  &:hover {
    ${Actions} {
      display: flex;
    }
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 20px;
  color: #495057;
  ${(props: checked) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem(props: props) {

  const [selectedEdit, setSelectedEdit] = useState("-1")
  const [inputValue, setInputValue] = useState("")

  const deleteTodo = useStoreActions((actions) => actions.todos.deleteTodo);
  const checkTodo = useStoreActions((actions) => actions.todos.checkTodo);
  const updateTodo = useStoreActions((actions) => actions.todos.updateTodo);

  const CheckCircle = styled.input.attrs({
    type: 'checkbox',
    checked: props.done
  })`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  `;

  const CheckCircleStyle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #ced4da;
    font-size: 24px;
    margin-right: 20px;
    cursor: pointer;
    background: white;
  
    display: flex;
    align-items: center;
    justify-content: center;    
    ${(props: checked) =>
      props.done &&
      css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
      `}
  `;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  const onToggle = (id: string) => {
    checkTodo(id)
  };
  const onEdit = (id: string, text: string) => {
    setSelectedEdit(id)
    setInputValue(text)
  };
  const onRemove = (id: string) => {
    deleteTodo(id)
  };
  const onSubmit = (id: string) => {
    updateTodo({
        id: id,
        text: inputValue,
        done: props.done
    })
    setSelectedEdit("-1")
  };
 
  return (
    <TodoItemBlock>
      {/* CheckBox input (input) - Hidden */}
      <CheckCircle />
      {/* CheckBox design (div) - visible */}
      <CheckCircleStyle done={props.done} onClick={() => onToggle(props.id)}>
        {props.done && <MdDone />}
      </CheckCircleStyle>
      
      {props.id === selectedEdit ? (
        <Input onChange={onChange} value={inputValue} />
      ) : (
        <Text done={props.done}>{props.text}</Text>
      )}
      
      <Actions>
        <ActionButton buttonType={"primary"}>
          {props.id === selectedEdit ? (
            <MdOutlineCheckBox onClick={() => onSubmit(props.id)} />
          ) : (
            <MdModeEdit onClick={() => onEdit(props.id, props.text)} />
          )}
        </ActionButton>
        <ActionButton buttonType={"danger"}>
          <MdDelete onClick={() => onRemove(props.id)} />
        </ActionButton>
      </Actions>
    </TodoItemBlock>
  );
}

export default TodoItem;
