import axios from 'axios';

export const fetchResults = category => (dispatch) => {
  axios.get(`https://swapi.co/api/${category}/`)
    .then((response) => {
      dispatch({
        type: 'FETCH_RESULTS',
        results: response.data.results,
      });
    })
    .catch(() => {
      // Handle error
    });
};
