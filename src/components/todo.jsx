import React from "react";
import { connect } from "react-redux";
import Todoaction from "./redux/action/todoaction";

const todo = ({ id, dilakukan, ubahtodo, data, sudah }) => {
  console.log(data);
  const handle = () => {
    ubahtodo(id, dilakukan);
  };
  return (
    <div onClick={handle}>
      <span>{id}</span>
      &nbsp;
      <span>{dilakukan}</span>
      &nbsp;
      <span>{sudah ? "udah" : "belom"}</span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    dilakukan: state.todo.dilakukan[ownProps.id],
    sudah: state.todo.complete[ownProps.id],
  };
};

const mapDispatchToProps = {
  ubahtodo: Todoaction.aksinya,
};

export default connect(mapStateToProps, mapDispatchToProps)(todo);
