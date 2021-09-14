const initState = {
  placeholder: "111",
};

export const homeReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "CHANGE_PLACEHOLDER":
      return {
        ...state,
        placeholder: action.payload,
      };
    default:
      return state;
  }
};
