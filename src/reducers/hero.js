import {
  HERO_LOOKUP,
  HERO_LOOKUP_SUCCESS,
  HERO_LOOKUP_FAILURE,
} from "../actions";

const initialState = {
  loading: false,
  hero: [],
  error: "",
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO_LOOKUP:
      return {
        ...state,
        loading: true,
        hero: action.payload,
      };
    case HERO_LOOKUP_SUCCESS:
      return {
        loading: false,
        hero: action.payload,
        error: "",
      };
    case HERO_LOOKUP_FAILURE:
      return{
        loading: false,
        hero: [],
        error: action.payload,
      }
    default:
      return state;
  }
};
export default heroReducer;
