import React from "react";
import { Grid } from "@material-ui/core";
import './Heroes.css';
import HeroInfo from "../HeroInfo/HeroInfo";

//Redux imports
import {useSelector, useDispatch} from 'react-redux';
import {heroLookup}from '../../actions';

export default function Heroes() {

  const hero =  useSelector(state => state.hero);
  const dispatch = useDispatch();

const searchHero = (e) =>{
    e.preventDefault();
    const heroName = e.target.elements.heroName.value;
    dispatch(heroLookup(heroName));
    return;
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
          <HeroInfo hero={hero}></HeroInfo>
        </Grid>
      </Grid>
    </div>
  );
}
