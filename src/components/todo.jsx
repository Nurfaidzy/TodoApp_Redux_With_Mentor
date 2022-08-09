import React from "react";
import { connect } from "react-redux";
import Todoaction from "./redux/action/todoaction";

const todo = ({ id, dilakukan, ubahtodo, data, sudah }) => {
  const handle = () => {
    ubahtodo(id, dilakukan);
  };
  return (
    <div>
      <div>
        <input type="hidden" name="" value={id} />
        {dilakukan}
      </div>
      <div className="pt-4 flex justify-end">
        <input
          type="button"
          value={sudah ? "Sudah" : "Belom nih"}
          className="p-2 bg-[#E2DCC8] text-[#100F0F] rounded-xl"
          onClick={handle}
        />
      </div>
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
