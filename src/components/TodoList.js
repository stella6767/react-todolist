import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const { todos } = useSelector((store) => store);

  // todos.forEach((todo) => {
  //   {
  //     console.log(todo.id);
  //   }
  // });

  return (
    <TodoListBlock>
      {todos.map((todo) => {
        console.log(1, todo);
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </TodoListBlock>
  );
};

export default TodoList;
