export const GET_MAIN_SUCCESS = "GET_MAIN_SUCCESS";
export const GET_MAIN_FAILED = "GET_MAIN_FAILED";
export const GET_MAIN_REQUEST = "GET_MAIN_REQUEST";

const apiKey = "e787dd4d8c91f11c6945bb9985a6473e";

export function getMainCity() {
  return dispatch => {
    dispatch({
      type: GET_MAIN_REQUEST
    });

    requestAndUpdateLocation(dispatch);
  };
}

function requestAndUpdateLocation(dispatch) {
  navigator.geolocation.getCurrentPosition(
    position => {
      getLocation(
        position.coords.latitude,
        position.coords.longitude,
        dispatch
      );
    },
  );
}

function getLocation(latitude, longitude, dispatch) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}`
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }

      return response;
    })
    .then(data => data.json())
    .then(json => {
      dispatch({
        type: GET_MAIN_SUCCESS,
        payload: json
      });
    })
    .catch(e => {
      dispatch({
        type: GET_MAIN_FAILED,
        payload: e.message
      });
    });
}
