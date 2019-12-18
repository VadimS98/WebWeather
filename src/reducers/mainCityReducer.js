import {
  GET_MAIN_REQUEST,
  GET_MAIN_SUCCESS,
  GET_MAIN_FAILED
} from "../actions/mainLocationCity";

export const initialState = {
  isFetching: true
};

export function mainCityReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_MAIN_SUCCESS:
      return Object.assign({}, state, {
        mainCityInfo: action.payload,
        isFetching: false
      });
    case GET_MAIN_FAILED:
      return Object.assign({}, state, {
        error: true,
        isFetching: false
      });

    default:
      return state;
  }
}
