let lanjutanid = 0;

const tambahtodo = (todo) => {
  return {
    type: "ADD_LAKUKAN",
    payload: {
      id: lanjutanid++,
      dilakukan: todo,
    },
  };
};

const udahbelom = (id) => {
  return {
    type: "UDAH",
    payload: {
      id: id,
    },
  };
};

export default {
  tambahtodo,
  udahbelom,
};
