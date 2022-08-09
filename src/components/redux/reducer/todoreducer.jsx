const todo = {
  id: [],
  dilakukan: {},
};

const lakukan = (state = todo, action) => {
  switch (action.type) {
    case "ADD_LAKUKAN":
      return {
        ...state,
        id: [...state.id, action.payload.id],
        dilakukan: {
          ...state.dilakukan,
          [action.payload.id]: action.payload.dilakukan,
          complete: false,
        },
      };
    case "UDAH":
      return {
        ...state,
        dilakukan: {
          ...state.dilakukan,
          [action.payload.id]: action.payload.dilakukan,
          complete: !state.dilakukan[action.payload.id].complete,
        },
      };
    default:
      return state;
  }
};

export default lakukan;
