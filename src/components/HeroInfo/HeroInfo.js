import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
function HeroInfo({ hero }) {
  console.log(hero);
  return (
    <div>
      <Grid container spacing={0} style={{ paddingTop: "10px" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {hero.loading ? (
            <h2>Loading Data...</h2>
          ) : hero.error ? (
            <h2>{hero.error}</h2>
          ) : (
            <div>
              <span>{hero.hero.thumbnail}</span>
            
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    hero: state.hero,
  };
};

export default connect(mapStateToProps)(HeroInfo);
