import React from "react";
import Forminputtodo from "./Forminputtodo";
import Todolist from "./todolist";

import { useState } from "react";
import { FiArchive } from "react-icons/fi";

const TodoApp = () => {
  const [buka, setBuka] = useState(true);
  const bukatutup = () => {
    setBuka(!buka);
  };
  return (
    <>
      <div className="laptop:hidden">
        <div
          className={
            buka
              ? "flex justify-between  bg-black bg-opacity-50"
              : "flex justify-between  "
          }
        >
          {buka ? (
            <>
              <div>
                <div className="bg-[#2C3333] w-[100%] text-[#E7F6F2] h-screen py-4 px-4">
                  <div className=" flex justify-between">
                    <div className="flex justify-center w-[100%] font-bold text-2xl">
                      <p>Todo Application</p>
                    </div>
                    <div className="text-2xl pt-1">
                      <FiArchive onClick={bukatutup} />
                    </div>
                  </div>
                  <div className="py-[5%]">
                    <Forminputtodo />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="bg-[#2C3333] text-[#E7F6F2]  h h-screen py-4 px-4">
                  <div className=" flex justify-between">
                    <div className="text-2xl pt-1">
                      <FiArchive onClick={bukatutup} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div
            className={
              buka ? "w-[80%] pt-[3%]" : "w-full py-[3%] px-[3%] bg-[#E2DCC8]"
            }
          >
            <Todolist />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
