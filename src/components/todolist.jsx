import Todo from "./todo";
import { connect } from "react-redux";

const todolist = ({ id }) => {
  console.log(id);
  return (
    <div>
      <p>list todo</p>

      {id.map((item, i) => {
        return <Todo key={i} id={id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.todo.id,
  };
};

export default connect(mapStateToProps)(todolist);
