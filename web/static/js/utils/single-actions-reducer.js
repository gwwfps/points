export default function singleActionsReducer(defaultState, functions) {
  return function(state = defaultState, action) {
    const reducer = functions[action.type];
    if (reducer) {
      return reducer(state, action.payload);
    }
    return state;
  };
}
