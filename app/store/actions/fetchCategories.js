import axios from 'axios';

export const fetchCategories = () => (dispatch) => {
  axios.get('https://swapi.co/api/')
    .then((response) => {
      dispatch({
        type: 'FETCH_CATEGORIES',
        categories: response.data,
      });
    })
    .catch(() => {
      // Handle error
    });
};
