import axios from "axios";
const apikey = "6a319681afe7fdafcc2a808530586b30";
const hash = "f09ae5e956fc3e3db08f5f86be49fde4";

const lookup = async (action) => {
  const result = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&name=${action.payload}`
  );
  const data = result.data;
  return data;
};

const heroReducer = (state = null, action) => {
  switch (action.type) {
    case "HERO_LOOKUP":
      const result = lookup(action);
      state = result;
      return state;
    default:
      return state;
  }
};
export default heroReducer;
