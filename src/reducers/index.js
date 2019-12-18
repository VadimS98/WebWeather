import { combineReducers } from "redux";
import { favoriteCitiesReducer } from "./favoriteCitiesReducer";
import { mainCityReducer } from "./mainCityReducer";

export const rootReducer = combineReducers({
  mainCity: mainCityReducer,
  favoriteCities: favoriteCitiesReducer
});
