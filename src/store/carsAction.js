import axios from 'axios';

export const GET_CARS_LIST = "GET_CARS_LIST";

export const getCarsList = () => {
  return (dispatch) => {
    axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
      .then(function (response) {
        dispatch({
          type: GET_CARS_LIST,
          payload: {
            data: response.data,
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};