import ActionTypes from '../actionTypes';

const INITIAL_STATE = {
  visitedLocals: [],
  minTempCity: {},
  maxTempCity: {},
};

const weather = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.VISITED_LOCALS:
      const incommingCity = {
        id: action.id,
        temp_min: action.temp_min,
        temp_max: action.temp_max
      };

      const index = state.visitedLocals.findIndex(local => local.id === action.id);

      if (index === -1) {
        const newVisitedLocals = [
          ...state.visitedLocals,
          incommingCity,
        ];

        return {
          ...state,
          visitedLocals: newVisitedLocals,
          minTempCity: (state.minTempCity.id === undefined) || (state.minTempCity.temp_min > action.temp_min) ? incommingCity : state.minTempCity,
          maxTempCity: (state.maxTempCity.id === undefined) || (state.maxTempCity.temp_max < action.temp_max) ? incommingCity : state.maxTempCity,
        };
      };

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default weather;
