const results = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESULTS':
      return action.results;
    case 'SORT_RESULTS':
      return [...state].sort((a, b) => {
        const nameA = a.name || a.title || '';
        const nameB = b.name || b.title || '';

        return nameA.localeCompare(nameB);
      });
    case 'SEARCH_RESULTS':
      return [...state].filter((result) => {
        const name = result.name || result.title || '';
        return name.toLowerCase().indexOf(action.query.toLowerCase()) > -1;
      });
    case 'EMPTY_RESULTS':
      return [];
    default:
      return state;
  }
};

export default results;
