import {
  HERO_LOOKUP,
  HERO_LOOKUP_SUCCESS,
  HERO_LOOKUP_FAILURE,
} from "../actions";

const initialState = {
  loading: false,
  hero: {
    thumbnail: '',
    comics: [],
  },
  error: "",
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO_LOOKUP:
      return {
        ...state,
        loading: true,
      };
    case HERO_LOOKUP_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: {
          thumbnail: `${action.payload.thumbnail.path}.${action.payload.thumbnail.extension}`,
          comics: action.payload.comics.items,
        },
      };
    case HERO_LOOKUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default heroReducer;
