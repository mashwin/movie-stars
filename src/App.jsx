import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Movies from './components/Movies';
import './custom.css';

class App extends Component
{
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      movies: ''
    }
  }

  // update query string
  modifyQueryText = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  // call to retrieve movies
  findMovies = () => {
    const URL = `http://netflixroulette.net/api/api.php?actor=${this.state.query}`;
    fetch(
      URL,
      {
        method: 'GET'
      }
    )
    .then(response => response.json())
    .then(json => {
      this.setState({
        'movies': json
      });
    });
  }

  render() {
    return(
      <div className="app">
      <FormGroup>
        <InputGroup>
          <FormControl
          type="text"
          placeholder="Search movies staring a certain actor"
          onChange={(event) => this.modifyQueryText(event)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.findMovies();
            }
          }}
          />
          <InputGroup.Addon>
            <Glyphicon
            glyph="search"
            onClick={() => this.findMovies()}
            ></Glyphicon>
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
      { this.state.movies &&
        <Movies
          movies={this.state.movies}
        />
      }
      </div>
    )
  }
}

export default App;
