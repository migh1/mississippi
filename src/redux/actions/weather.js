import ActionTypes from '../actionTypes';

export function actionAddToVisitedLocals(id, temp_min, temp_max) {
  return {
    type: ActionTypes.VISITED_LOCALS,
    id,
    temp_min,
    temp_max,
  };
}

