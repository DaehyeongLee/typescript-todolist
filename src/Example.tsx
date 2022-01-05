import React from "react";

function Example() {

  // "noImplicitAny": false일 경우 에러 발생 안함. true일경우 에러 발생 (any로 암묵적으로 추론되는 변수에 대하여 오류를 발생)
  const add = (a, b) => {
    return a + b;
  };

  // "strictNullChecks": false일 경우 에러 발생 안함. true일경우 에러 발생 (null과 undefined와 같은 값은 다른 타입의 값에 할당할 수 없게 함)
  const a: null = null;
  const b: string = a;

  const user = {
    name: "Daniel",
    age: 26,
  };

  // 함수 -> 매개변수 타입, 반환값 타입 표기 가능
  function getFavoriteNumber(x: number): number {
    return x;
  }

  // 객체 타입 -> , 혹은 ; 로 구분 가능
  function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }

  // 옵셔널 타입
  function printName(obj: { first: string; last?: string }) {
    // 오류 - `obj.last`의 값이 제공되지 않는다면 프로그램이 멈추게 됩니다!
    //console.log(obj.last.toUpperCase());
 
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
   
    // 최신 JavaScript 문법을 사용하였을 때 또 다른 안전한 코드
    console.log(obj.last?.toUpperCase());
  }

  // 타입 별칭
  interface window {
      title: string
  }
  interface window {
      title2: string
  }
  const obj : window = {
      title: "Hello",
      title2: "Hello2"
  }

  // 리터럴 타입
  function printText (str: string, alignment: "left" | "right" | "center") {
      return (
          <div>
              {str + " " + alignment}
          </div>
      )
  }

  // Generic 예제
  function indentity<T>(arg: T): T {
      return arg;
  }
  
  let myIdentity: <T>(arg: T) => T = indentity;
  let myIdentity2: { <T>(arg: T): T } = indentity;

  return (
    <div>
      {add(3, 5)}
      {/* {user.location} --> 자바스크립트의 경우 undefined를 반환, 타입스크립트는 오류 발생*/}
      {getFavoriteNumber(100)}
      {printCoord({x: 10, y: 20})}
      {printName({first: "Zach"})}
      {obj.title + obj.title2}
      <br />
      {printText("Position", "left")}
      {indentity<string>("Generic")}
    </div>
  );
}

export default Example;
