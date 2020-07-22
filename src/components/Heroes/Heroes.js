import React, {useEffect} from "react";
import { Grid } from "@material-ui/core";
import "./Heroes.css";
import HeroInfo from "../HeroInfo/HeroInfo";
import { fetchHero } from "../../actions/heroActions";
import {fetchComics} from "../../actions/comicActions";
import {connect} from 'react-redux';

 function Heroes({fetchComics, fetchHero, hero}) {

  useEffect(()=>{
    console.log(hero);
    let heroId = hero.hero.heroId;
    console.log(heroId);
    fetchComics(heroId);
  }, [fetchHero, hero, fetchComics])

  const searchHero = (e) => {
    e.preventDefault();
    const heroName = e.target.elements.heroName.value;
    fetchHero(heroName);
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

const mapStateToProps = state => {
  return {
    hero: state.hero,
    comics: state.comics
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    fetchHero: heroName => dispatch(fetchHero(heroName)),
    fetchComics: heroId => dispatch(fetchComics(heroId))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Heroes);

