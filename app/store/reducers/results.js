const results = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return action.results;
    case 'SORT_RESULTS':
      return [...state].sort((a, b) => {
        const aName = a.name || a.title || '';
        const bName = b.name || b.title || '';

        return aName.localeCompare(bName);
      });
    default:
      return state;
  }
};

export default results;
