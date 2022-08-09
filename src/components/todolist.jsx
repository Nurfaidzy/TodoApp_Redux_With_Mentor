import Todo from "./todo";
import { connect } from "react-redux";
import React from "react";

const todolist = ({ id, data }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="grid grid-cols-5 gap-10">
          {id.map((item, i) => {
            return (
              <>
                <div className="bg-[#0F3D3E] p-6 rounded-xl  text-[#F1F1F1]">
                  <Todo key={i} id={item} data={data} />
                </div>
              </>
            );
          })}
        </div>
      </div>
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
