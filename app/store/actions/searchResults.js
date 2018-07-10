export const searchResults = query => (dispatch) => {
  dispatch({ type: 'SEARCH_RESULTS', query });
};
