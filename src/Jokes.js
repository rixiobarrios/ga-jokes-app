import React, { Component } from 'react';

class Jokes extends Component {
  render() {
    return (
      <div className="Joke">
        <h3>{this.props.setup}</h3>
        <h3>{this.props.punchline}</h3>
      </div>
    );
  }
}

export default Jokes;
