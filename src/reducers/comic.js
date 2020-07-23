import {
  COMICS_LOOKUP,
  COMICS_LOOKUP_SUCCESS,
  COMICS_LOOKUP_FAILURE,
} from "../actions/comicActions";

const initialState = {
  comicLoading: false,
  comics: [],
  comicError: "",
};
const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMICS_LOOKUP:
      return {
        ...state,
        comicLoading: true,
      };
    case COMICS_LOOKUP_SUCCESS:
      return {
        ...state,
        comicLoading: false,
        comics: action.payload
      };
    case COMICS_LOOKUP_FAILURE:
      return {
        ...state,
        comicError: action.payload,
      };
    default:
      return state;
  }
};

export default comicReducer;
