import React from "react";
import styled from "styled-components";

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
  padding: 30px 30px;
  border-bottom: 1px solid #dcdcdc;
`;

function TodoHead() {

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
        <h4>{dayName}</h4>
        <div className = "task">남은 할 일: n 개</div>
    </Head>
  )

}

export default TodoHead;
