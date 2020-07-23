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
    heroName: '',
    numberOfSeries: 0,
    numberOfStories: 0,
    numberOfEvents: 0,
    numberOfComics: 0,
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
          heroName: action.payload.name,
          numberOfSeries: action.payload.series.available,
          numberOfStories: action.payload.stories.available,
          numberOfEvents: action.payload.events.available,
          numberOfComics: action.payload.comics.available,
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
