import React from 'react';
import { createGlobalStyle } from 'styled-components';

import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const AppTemplate = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {

  return (
    <div>
      <AppTemplate />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
