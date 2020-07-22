import {
  HERO_LOOKUP,
  HERO_LOOKUP_SUCCESS,
  HERO_LOOKUP_FAILURE,
} from "../actions/heroActions";

const initialState = {
  heroLoading: false,
  hero: {
    thumbnail: '',
    heroId: '',
  },
  heroError: "",
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO_LOOKUP:
      return {
        ...state,
        heroLoading: true,
      };
    case HERO_LOOKUP_SUCCESS:
      return {
        ...state,
        heroLoading: false,
        hero: {
          thumbnail: `${action.payload.thumbnail.path}.${action.payload.thumbnail.extension}`,
          heroId: action.payload.id,
        },
      };
    case HERO_LOOKUP_FAILURE:
      return {
        ...state,
        heroLoading: false,
        heroError: action.payload,
      };
    default:
      return state;
  }
};
export default heroReducer;
