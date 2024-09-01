import axios from 'axios';

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });

    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=04e489bbf882464ea91214153241806&q=${city}`);
      console.log(response.data)
      dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_WEATHER_FAILURE', error: error.message });
    }
  };
};
