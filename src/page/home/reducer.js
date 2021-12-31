
const initialState = {
    activetag:""
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "activetag":
        newState.activetag = action.payload;
        break;
    default:
      break;

  }
  return newState;
};
