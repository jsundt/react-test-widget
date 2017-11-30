import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to the Test Widget: { this.props.title }</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
