import React, { Component, Fragment } from 'react';
import './App.css';
import Jokes from './Jokes.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setup: '',
      punchline: ''
    };
  }
  componentDidMount() {
    this.jokeClick();
  }

  jokeClick = () => {
    const url = 'https://official-joke-api.appspot.com/jokes/random';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ setup: data.setup, punchline: data.punchline });
      });
  };

  render() {
    return (
      <Fragment>
        <header>
          <h1>Dad Jokes</h1>
        </header>
        <Jokes setup={this.state.setup} punchline={this.state.punchline} />
        <button className="button" onClick={this.jokeClick}>
          New Joke
        </button>
      </Fragment>
    );
  }
}
export default App;
