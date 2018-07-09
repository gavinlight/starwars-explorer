const results = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return action.results;
    default:
      return state;
  }
};

export default results;
