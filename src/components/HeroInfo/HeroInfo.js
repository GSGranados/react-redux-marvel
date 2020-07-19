import React from "react";
import { Grid } from "@material-ui/core";
import {useSelector} from 'react-redux';
function HeroInfo() {
  const hero = useSelector((state) => state.hero);
  console.log(hero.hero);
  return (
    <div>
      <Grid 
      container 
      spacing={0}
      style={{ paddingTop: "10px" }}>
        <Grid  item xs={12} style={{textAlign:"center"}}>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroInfo;
