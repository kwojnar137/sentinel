import * as types from "../constants/actionTypes";

export const setGear = (gear) => {
  return {
    type: types.SET_GEAR,
    payload: gear,
  };
};

export default {
  setGear,
};
