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
        <p className=" pt-4 ">Apa yang ingin kamu lakukan hari ini?</p>
        <div className="pt-4">
          <input
            type="text"
            name="inputan"
            id=""
            required
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="px-2 hover:shadow-2xl w-full rounded-xl h-10  shadow-[#E7F6F2] text-[#395B64] "
          />
        </div>
        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            className="py-2 px-12 rounded-xl text-[#395B64] font-bold bg-[#E7F6F2]"
          >
            Buat
          </button>
        </div>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  addTodo: Todoaction.tambahtodo,
};

export default connect(null, mapDispatchToProps)(Forminputtodo);
