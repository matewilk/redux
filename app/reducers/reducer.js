const initialState = {
  list: []
};

function app (state = initialState, action) {
  let newState;
  switch (action.type) {
    case 'ADD_ITEM':
      newState = JSON.parse(JSON.stringify(state));
      newState.list = newState.list.concat([action.value]);
      return newState;
    case 'REMOVE_ITEM':
      newState = JSON.parse(JSON.stringify(state));
      newState.list = newState.list.filter((item) => {
        return action.id !== item.id;
      });
      return newState;
    case 'FILTER_ITEM':
      newState = JSON.parse(JSON.stringify(state));
      return Object.assign({}, newState, {
        filter: action.string
      });
    default:
      return state;
  }
}

export default app;
