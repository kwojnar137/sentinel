import * as types from "../constants/actionTypes";

export const incrementAcceleration = (step) => {
  return {
    type: types.ACCELERATION_INCREMENT,
    payload: step,
  };
};

export const decrementAcceleration = (step) => {
  return {
    type: types.ACCELERATION_DECREMENT,
    payload: step,
  };
};

export const setMaxAccelerationValue = () => {
  return {
    type: types.ACCELERATION_HIGHER_THAN_100,
  };
};

export const setMinAccelerationValue = () => {
  return {
    type: types.ACCELERATION_LOWER_THAN_0,
  };
};
