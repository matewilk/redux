import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers/reducer';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(app);

import Parent from './components/Parent';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Parent />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
