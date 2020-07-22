import axios from "axios";

//COMIC ACTIONS
export const COMICS_LOOKUP = "COMICS_LOOKUP";
export const comicsLookup = () => {
  return {
    type: COMICS_LOOKUP,
  };
};

export const COMICS_LOOKUP_SUCCESS = "COMICS_LOOKUP_SUCCESS";
export const comicsLookupSuccess = (comics) => {
  return {
    type: COMICS_LOOKUP_SUCCESS,
    payload: comics,
  };
};

export const COMICS_LOOKUP_FAILURE = "COMICS_LOOKUP_FAILURE";
export const comicsLookupFailure = (error) => {
  return {
    type: COMICS_LOOKUP_FAILURE,
    payload: error,
  };
};

//COMICS ACTION CREATORS
export const fetchComics = (heroId) => {
  return (dispatch) => {
    dispatch(comicsLookup());
    try {
        heroId === '' ? (dispatch(comicsLookupFailure('Waiting for a Hero ID'))):(
      axios
        .get(
          `http://gateway.marvel.com/v1/public/characters/${heroId}/comics?ts=1&apikey=6a319681afe7fdafcc2a808530586b30&hash=f09ae5e956fc3e3db08f5f86be49fde4`
        )
        .then(response => {
            const comics = response.data.data.results;
            console.log(comics);
            dispatch(comicsLookupSuccess(comics));
        }));
    } catch (error) {
        dispatch(comicsLookupFailure(error));
    }
  };
};
