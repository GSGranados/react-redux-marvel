import React from "react";
import { Grid } from "@material-ui/core";

function HeroInfo() {
  return (
    <div>
      <Grid 
      container 
      spacing={0}
      style={{ paddingTop: "10px" }}>
        <Grid  item xs={12} style={{textAlign:"center"}}>
            This is the hero info component!!
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroInfo;
