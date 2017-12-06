import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../shared/cleanslate.css'; // Reset CSS
import styles from './Test.css';

class App extends Component {
  state = {
    buttonState: false,
  }

  clickHandler = () => {
    const newState = !this.state.buttonState;

    this.setState({
      buttonState: newState,
    });
  }

  buttonStyle = () => {
    const style = [styles.button];

    if (this.state.buttonState) {
      style.push(styles.buttonActive);
    }

    return style.join(' ');
  }


  render() {
    return (
      <div className={styles.cleanslate}>
        <header>
          <h1>Welcome to the Test Widget: { this.props.title }</h1>
        </header>
        <p className={styles.test}>
          This test widget has some relevance to <a href="https://www.charliehr.com">CharlieHR</a>
        </p>
        <button
          onClick={this.clickHandler}
          className={[styles.button, this.state.buttonState ? styles.buttonActive : ''].join(' ')}
        >
          Button!
        </button>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
