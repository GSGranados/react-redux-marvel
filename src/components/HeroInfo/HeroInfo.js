import React from "react";
import { Grid } from "@material-ui/core";

function HeroInfo(props) {
  console.log(props);
  return (
    <div>
      <Grid 
      container 
      spacing={0}
      style={{ paddingTop: "10px" }}>
        <Grid  item xs={12} style={{textAlign:"center"}}>
            {props.hero}
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroInfo;
