import React, { CSSProperties } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

import { useStoreState } from "./store";

import { Fireworks, useFireworks } from "fireworks-js/dist/react";

function App() {

  const todos = useStoreState(state => state.todos.todos);
  const unDoneTodosLength = todos.filter(todo => todo.done === false).length;

  const { enabled, options } = useFireworks({
    initialStart: true,
    initialOptions: {
      hue: {
        min: 0,
        max: 345
      },
      delay: {
        min: 15,
        max: 15
      },
      rocketsPoint: 50,
      speed: 10,
      acceleration: 1.2,
      friction: 0.96,
      gravity: 1,
      particles: 90,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03
        }
      },
      boundaries: {
        visible: false
      }
    }
  });

  const style: CSSProperties = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: unDoneTodosLength !== 0 ? "#e9ecef" : "#444",
    transition: "0.3s ease-in"
  };

  return (
    <div>
      <Fireworks style={style} enabled={unDoneTodosLength === 0} options={options} />
      
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
