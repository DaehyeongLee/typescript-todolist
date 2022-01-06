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

const Actions = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  cursor: pointer;
  color: #dee2e6;
`;

const EditAction = styled.div`
  margin-right: 3px;

  &:hover {
    color: #38d9a9;
  }
`;

const DeleteAction = styled.div`
  &:hover {
    color: #ff6b6b;
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

const CheckCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #ced4da;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;

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
  const onSubmit = () => {
    setSelectedEdit("-1")
  };
 
  return (
    <TodoItemBlock>
      <CheckCircle done={props.done} onClick={() => onToggle(props.id)}>
        {props.done && <MdDone />}
      </CheckCircle>
      
      {props.id === selectedEdit ? (
        <Input onChange={onChange} value={inputValue} />
      ) : (
        <Text done={props.done}>{props.text}</Text>
      )}
      
      <Actions>
        <EditAction>
          {props.id === selectedEdit ? (
            <MdOutlineCheckBox onClick={onSubmit} />
          ) : (
            <MdModeEdit onClick={() => onEdit(props.id, props.text)} />
          )}
        </EditAction>
        <DeleteAction>
          <MdDelete onClick={() => onRemove(props.id)} />
        </DeleteAction>
      </Actions>
    </TodoItemBlock>
  );
}

export default TodoItem;
