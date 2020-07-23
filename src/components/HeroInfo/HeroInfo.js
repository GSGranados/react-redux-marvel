import React from "react";
import { Grid, Paper } from "@material-ui/core";
//Card Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
//Fonts-typography
import Typography from "@material-ui/core/Typography";
//React-Redux Imports
import { connect } from "react-redux";
//CSS
import "./HeroInfo.css";
//Other Imports
import CountUp from "react-countup";
//Carousel Import
import Carousel from 'react-material-ui-carousel'

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

function HeroInfo({ hero, comic }) {
  console.log(hero);
  console.log(comic);
  console.log(comic.comics.length);
  return (
    <div>
      {hero.loading ? (
        <h2>Loading Data...</h2>
      ) : hero.error ? (
        <h2>{hero.error}</h2>
      ) : (
        <Grid container spacing={1} style={{ paddingTop: "10px", flexGrow: 1 }}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {hero.hero.thumbnail === "" ? (
              ""
            ) : (
              <Paper style={styles.Paper}>
                <Card>
                  <CardActionArea style={styles.PaperCard}>
                    <div>
                      <img
                        className="heroThumbnail img-fluid"
                        src={hero.hero.thumbnail}
                        alt={hero.hero.heroName}
                      />
                    </div>
                    <CardContent>
                      <Typography
                        style={{ fontFamily: "Bebas Neue", color: "#ed1d24" }}
                        gutterBottom
                        variant="h3"
                        component="h2"
                      >
                        {hero.hero.heroName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Paper>
            )}
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {hero.hero.numberOfSeries === 0 &&
            hero.hero.numberOfComics === 0 &&
            hero.hero.numberOfEvents === 0 &&
            hero.hero.numberOfStories === 0 ? (
              ""
            ) : (
              <Paper style={styles.PaperInfo}>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{ fontFamily: "Bebas Neue", color: "#00000" }}
                  >
                    <div
                      className="heroDetailsContainer"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                      }}
                    >
                      <div className="heroDetails">
                        Series:{" "}
                        <CountUp
                          start={0}
                          end={hero.hero.numberOfSeries}
                          duration={2.5}
                          separator=","
                        />{" "}
                      </div>
                      <div className="heroDetails">
                        Stories:
                        <CountUp
                          start={0}
                          end={hero.hero.numberOfStories}
                          duration={1.5}
                          separator=","
                        />
                      </div>
                      <div className="heroDetails">
                        Events:{" "}
                        <CountUp
                          start={0}
                          end={hero.hero.numberOfEvents}
                          duration={1.0}
                          separator=","
                        />
                      </div>
                      <div className="heroDetails">
                        Comics:{" "}
                        <CountUp
                          start={0}
                          end={hero.hero.numberOfComics}
                          duration={2.0}
                          separator=","
                        />
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Paper>
            )}
          </Grid>
          {typeof comic.comics !== "undefined" && comic.comics.length > 0 ? (
            <Grid container spacing={1} style={{ paddingTop: "10px" }}>
              <Grid
                className="ComicTitle"
                item
                xs={12}
                style={{ textAlign: "center" }}
              >
                Comics
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Carousel navButtonsAlwaysVisible={true} indicators={false} animation={"slide"} fullHeightHover={true} autoPlay={false}>
                  {comic.comics.map((comic, i) => {
                    return (
                      <Paper style={styles.Paper} key={i}>
                        <img
                          className="comicThumbnail"
                          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                          alt={comic.title}
                        />
                        <Typography
                          variant="h5"
                          style={{ fontFamily: "Bebas Neue", color: "#00000" }}
                        >
                          {comic.title}
                        </Typography>
                      </Paper>
                    );
                  })}
                </Carousel>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    hero: state.hero,
    comic: state.comic,
  };
};

export default connect(mapStateToProps)(HeroInfo);
