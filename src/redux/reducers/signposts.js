import { SET_SIGNPOST } from "../constants/actionTypes";

const initialState = {
  signpostDirectionFromControl: null,
};

export const signpostDirectionFromControl = (
  state = initialState.signpostDirectionFromControl,
  action
) => {
  switch (action.type) {
    case SET_SIGNPOST:
      return action.payload;
    default:
      return state;
  }
};
