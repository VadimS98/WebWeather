import {
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILED,
  ADD_FAVORITE_NO_CITY,
  DELETE_FAVORITE
} from "../actions/favoriteCitiesAction";

export const initialState = {
  favoriteCities: [],
  isFetching: false
};

export function favoriteCitiesReducer(state = initialState, action) {
  var upFavoriteCities = state.favoriteCities.slice();
  switch (action.type) {
    case ADD_FAVORITE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ADD_FAVORITE_SUCCESS:
      upFavoriteCities.push(action.payload);
      return Object.assign({}, state, {
        favoriteCities: upFavoriteCities,
        isFetching: false
      });
    case ADD_FAVORITE_NO_CITY:
      alert(`No info for city ${action.payload}`);
      return Object.assign({}, state, {
        isFetching: false
      });
    case ADD_FAVORITE_FAILED:
      alert(`Error occured`);
      return Object.assign({}, state, {
        isFetching: false
      });
    case DELETE_FAVORITE:
      upFavoriteCities.splice(action.payload, 1);
      return Object.assign({}, state, {
        isFetching: false,
        favoriteCities: upFavoriteCities
      });
    default:
      return state;
  }
}
