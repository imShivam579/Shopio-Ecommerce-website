import { ActionTypes } from "../constants/action-type";

const initailState = {
  products: [
    {
      id: 1,
      title: "shivam",
      category: "programmer",
    },
  ],
};

export const productReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
      break;

    default:
      return state;
  }
};
