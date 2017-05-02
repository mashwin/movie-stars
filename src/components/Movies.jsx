import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../custom.css';

class Movies extends Component {

  render() {
    console.log(this.props.movies);
    return (
      <div className="movies">
        <Grid>
        {
          this.props.movies.length > 0 &&
          this.props.movies.map((movie, index) => (
            <Row key={index} className="show-grid sep">
              <Col md={4} className="poster">
                <img src={movie.poster} alt="poster" height="200" width="200" />
              </Col>
              <Col md={8}>
                Director: {movie.director}<br />
                Summary: {movie.summary}<br />
                Actors: {movie.show_cast}<br />
              </Col>
            </Row>
          ))
        }
        </Grid>
      </div>
    )
  }

}

export default Movies;
