
"use strict";

// Dependencies
import React from 'react';
import configureStore from './js/store/configureStore';
import { Provider } from 'react-redux';

// Components
import AwesomeProjectApp from './js/AwesomeProjectApp';
import LaunchScreen from './js/screens/LaunchScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeCreated: false,
      store: null,
    };
  }

  componentDidMount() {
    configureStore().then(
      store => this.setState({ store, storeCreated: true })
    );
  }

  render() {
    if (!this.state.storeCreated) {
      return <LaunchScreen />;
    }

    return (
      <Provider store={this.state.store}>
        <AwesomeProjectApp />
      </Provider>
    );
  }
}
