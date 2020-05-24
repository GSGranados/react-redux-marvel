import React from "react";
import { Grid } from "@material-ui/core";
import './Heroes.css';
import HeroInfo from "../HeroInfo/HeroInfo";
export default function Heroes() {

const searchHero = (e) =>{
    e.preventDefault();
    const heroName = e.target.elements.heroName.value;
    return heroName;
}
  return (
    <div>
      <Grid
        container
        spacing={0}
        style={{paddingTop: "15px"}}
      >
        <Grid item xs={12}>
          <form onSubmit={searchHero}>
          <input className="heroFormInput" name="heroName" placeholder="Give me a Marvel Hero Name..."></input>
          <button type="submit" className="heroFormButton">Search</button>
          </form>
          <HeroInfo></HeroInfo>
        </Grid>
      </Grid>
    </div>
  );
}
