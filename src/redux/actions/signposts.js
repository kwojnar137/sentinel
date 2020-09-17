import * as types from "../constants/actionTypes";

export const setSignpost = (direction) => {
  return {
    type: types.SET_SIGNPOST,
    payload: direction,
  };
};

export default {
  setSignpost,
};
