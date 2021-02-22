import {SET_LOADING_STATUS, SET_WEATHERS_RESPONSE, SET_ERROR} from "./appActions";
export const initialState = {
  isLoading: false,
  weathers: [],
  error: null
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: true
      };

    case SET_WEATHERS_RESPONSE:
      return {
        ...state,
        weathers: action.weathers,
        isLoading: false
      };

    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
