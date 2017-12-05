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
          This test widget has some relevance to <a href="https://www.charliehr.com">CharlieHR</a>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
