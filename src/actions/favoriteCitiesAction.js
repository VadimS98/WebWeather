export const ADD_FAVORITE_REQUEST = "ADD_FAVORITE_REQUEST";
export const ADD_FAVORITE_SUCCESS = "ADD_FAVORITE_SUCCESS";
export const ADD_FAVORITE_FAILED = "ADD_FAVORITE_FAILED";
export const ADD_FAVORITE_NO_CITY = "ADD_FAVORITE_NO_CITY";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

const apiKey = "e787dd4d8c91f11c6945bb9985a6473e";

function addCity(cityName, items) {
  return {
    type: "ADD_FAVORITE_SUCCESS",
    payload: {
      cityName: cityName,
      data: items
    }
  };
}

export function deleteFavoriteCity(cityIndex) {
  return dispatch => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: cityIndex
    });
  };
}

export function addFavoriteCity(cityName) {
  return dispatch => {
    dispatch({
      type: ADD_FAVORITE_REQUEST,
      payload: cityName
    });

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.status);
        }

        return response;
      })
      .then(data => data.json())
      .then(json => {
        dispatch(addCity(cityName, json));
      })
      .catch(e => {
        if (e.message !== "404") {
          dispatch({
            type: ADD_FAVORITE_FAILED,
            payload: e.message
          });
        } else {
          dispatch({
            type: ADD_FAVORITE_NO_CITY,
            payload: cityName
          })
        }
      });
  };
}
