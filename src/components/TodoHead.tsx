import React from "react";
import styled from "styled-components";
import { useStoreState } from "../store";

const Head = styled.div`
  h1 {
      color: #343a40;
  }
  h4 {
      color: #868e96;
  }
  .task {
      color: #20c997;
      margin-top: 30px;
      font-size: 18px;
      font-weight: bold;
  }
  padding: 20px 30px;
  border-bottom: 1px solid #dcdcdc;
`;

function TodoHead() {

  const todos = useStoreState(state => state.todos.todos);
  const unDoneTodos = todos.filter(todo => todo.done === false)

  const today = new Date();
  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });

  return (
    <Head>
        <h1>{dateString}</h1>
        <h4>{dayName === "월요일" ?
            "월요일엔 아마 바쁘지 않을까" : dayName === "화요일" ?
            "화요일도 성급해 보이지 안 그래" : dayName === "수요일" ?
            "수요일은 뭔가 어정쩡한 느낌" : dayName === "목요일" ?
            "목요일은 그냥 내가 왠지 싫어" : dayName === "금요일" ?
            "우~ 금요일에 시간 어때요" : dayName
        }</h4>
        <div className = "task">남은 할 일: {unDoneTodos.length} 개</div>
    </Head>
  )

}

export default TodoHead;
