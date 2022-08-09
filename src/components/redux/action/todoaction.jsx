let lanjutanid = 1;

const tambahtodo = (todo) => {
  return {
    type: "ADD_LAKUKAN",
    payload: {
      id: lanjutanid++,
      dilakukan: todo,
    },
  };
};

const aksinya = (id, dilakukan) => {
  return {
    type: "UDAH",
    payload: {
      id,
      dilakukan: dilakukan,
    },
  };
};

export default {
  tambahtodo,
  aksinya,
};
