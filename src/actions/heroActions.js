import axios from "axios";

//HERO ACTIONS
export const HERO_LOOKUP = "HERO_LOOKUP";
export const heroLookup = () => {
return {
    type: HERO_LOOKUP,
  };
};

export const HERO_LOOKUP_SUCCESS = "HERO_LOOKUP_SUCCESS";
export const heroLookupSuccess = (hero) => {
  return {
    type: HERO_LOOKUP_SUCCESS,
    payload: hero,
  };
};

export const HERO_LOOKUP_FAILURE = "HERO_LOOKUP_FAILURE";
export const heroLookupFailure = (error) => {
  return {
    type: HERO_LOOKUP_FAILURE,
    payload: error,
  };
};

// HERO ACTION CREATORS
export const fetchHero = (heroName) => {
  return dispatch => {
    dispatch(heroLookup());
    try {
      heroName === '' ? (dispatch(heroLookupFailure('Please Provide a Hero Name'))):(
      axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6a319681afe7fdafcc2a808530586b30&hash=f09ae5e956fc3e3db08f5f86be49fde4&name=${heroName}`
      ).then(response => {
        const hero = response.data.data.results[0];
        console.log(hero);
        dispatch(heroLookupSuccess(hero))
      }));
    } catch (error) {
      dispatch(heroLookupFailure(error));
    }
  };
};
