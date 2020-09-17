import { SET_GEAR } from "../constants/actionTypes";

const initialState = {
  gear: 0,
};

export const gear = (state = initialState.gear, action) => {
  switch (action.type) {
    case SET_GEAR:
      return action.payload;
    default:
      return state;
  }
};
