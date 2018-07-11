export const emptyResults = query => (dispatch) => {
  dispatch({ type: 'EMPTY_RESULTS', query });
};
