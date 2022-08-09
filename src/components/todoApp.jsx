import React from "react";
import Forminputtodo from "./Forminputtodo";
import Todolist from "./todolist";

const TodoApp = () => {
  return (
    <>
      <div>
        <p>Todo Application</p>
        <Forminputtodo />
        <hr />
        <Todolist />
      </div>
    </>
  );
};

export default TodoApp;
