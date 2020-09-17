import { SET_SIGNPOST } from "../constants/actionTypes";

const initialState = {
  signpost: null,
};

export const signposts = (state = initialState.signpost, action) => {
  switch (action.type) {
    case SET_SIGNPOST:
      return action.payload;
    default:
      return state;
  }
};
