import Todo from "./todo";
import { connect } from "react-redux";

const todolist = ({ id, data }) => {
  return (
    <div>
      <p>list todo</p>

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
