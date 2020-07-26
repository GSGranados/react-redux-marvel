import React from "react";
//Content Management Imports
import { Grid, Paper } from "@material-ui/core";
//Card Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
//Fonts-typography
import Typography from "@material-ui/core/Typography";
import "./ComicDetails.css";
import { Link } from "react-router-dom";

const styles = {
  Paper: {
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  PaperInfo: {
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
};

const ComicDetails = (props) => {
  const { comic } = props.location.state;
  console.log(comic);
  return (
    <Grid container spacing={1} style={{ paddingTop: "10px", flexGrow: 1 }}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Paper style={styles.Paper}>
          <Card>
            <CardActionArea style={styles.PaperCard}>
              <div>
                <img
                  className="comicThumbnail img-fluid"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
              </div>
              <CardContent>
                <span className="comicTitle">{comic.title}</span>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
      <Grid className="ComicTitle" item xs={12} style={{ textAlign: "center" }}>
        Creators
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Paper style={styles.PaperInfo}>
          <CardContent>
            <Typography
              variant="h5"
              style={{ fontFamily: "Bebas Neue", color: "#00000" }}
            >
              <div
                className="comicDetailsContainer"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                }}
              >
                {comic.creators.items.map((creator, i) => {
                  return (
                    <div key={i} className="comicDetails">
                      {creator.name}
                    </div>
                  );
                })}
              </div>
            </Typography>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12} style={{textAlign: "center"}}>
          <a rel="noopener noreferrer" target="_blank"  href={comic.urls[0].url}><button className="optionsButton">Details</button></a>
          <Link to="/"><button className="optionsButton">Home</button></Link>
      </Grid>
    </Grid>
  );
};

export default ComicDetails;
