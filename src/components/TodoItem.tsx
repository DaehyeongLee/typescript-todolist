import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdModeEdit, MdDelete } from "react-icons/md";

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
  const onToggle = () => {};

  const onEdit = () => {};
  const onRemove = () => {};

  return (
    <TodoItemBlock>
      <CheckCircle done={props.done} onClick={onToggle}>
        {props.done && <MdDone />}
      </CheckCircle>
      <Text done={props.done}>{props.text}</Text>
      <Actions>
        <EditAction>
          <MdModeEdit onClick={onEdit} />
        </EditAction>
        <DeleteAction>
          <MdDelete onClick={onRemove} />
        </DeleteAction>
      </Actions>
    </TodoItemBlock>
  );
}

export default TodoItem;
