import React from "react";
import { Grid } from "@material-ui/core";
import "./Heroes.css";
import HeroInfo from "../HeroInfo/HeroInfo";

//Redux imports
import { useDispatch} from "react-redux";
import { fetchHero } from "../../actions";

export default function Heroes() {
  const dispatch = useDispatch();

  const searchHero = (e) => {
    e.preventDefault();
    const heroName = e.target.elements.heroName.value;
    dispatch(fetchHero(heroName));
    return;
  };
  return (
    <div>
      <Grid container spacing={0} style={{ paddingTop: "15px" }}>
        <Grid item xs={12}>
          <form onSubmit={searchHero}>
            <input
              className="heroFormInput"
              name="heroName"
              placeholder="Give me a Marvel Hero Name..."
            ></input>
            <button type="submit" className="heroFormButton">
              Search
            </button>
          </form>
            <HeroInfo></HeroInfo>
        </Grid>
      </Grid>
    </div>
  );
}
