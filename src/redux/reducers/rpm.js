import { RPM_INCREMENT, RPM_DECREMENT } from "../constants/actionTypes";

const initialState = {
  rpm: 700,
};

export const rpm = (state = initialState.rpm, action) => {
  switch (action.type) {
    case RPM_INCREMENT:
      return state + action.payload;
    case RPM_DECREMENT:
      return state + action.payload;
    default:
      return state;
  }
};
