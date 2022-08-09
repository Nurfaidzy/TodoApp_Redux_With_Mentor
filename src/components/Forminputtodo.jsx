import React from "react";
import { useState } from "react";
import Todoaction from "./redux/action/todoaction";
import { connect } from "react-redux";

const Forminputtodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const diklik = (e) => {
    e.preventDefault();
    addTodo(todo);
  };
  return (
    <>
      <form onSubmit={diklik}>
        <input
          type="text"
          name="inputan"
          id=""
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  addTodo: Todoaction.tambahtodo,
};

export default connect(null, mapDispatchToProps)(Forminputtodo);
