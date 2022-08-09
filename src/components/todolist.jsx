import Todo from "./todo";
import { connect } from "react-redux";
import React from "react";

const todolist = ({ id, data }) => {
  return (
    <div>
      {id.map((item, i) => {
        return <Todo key={i} id={item} data={data} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.todo.id,
    data: state,
  };
};

export default connect(mapStateToProps)(todolist);
