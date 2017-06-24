import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { Button, Welcome } from '@storybook/react/demo';
import List from '../app/components/List';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('List', module)
  .add('items list', () => {
    let list = [
      {id: '234', value: 'test 1'},
      {id: '123', value: 'test 2'},
      {id: '432', value: 'test 3'}
    ];
    return <MuiThemeProvider>
      <List list={list} removeItem={() => { }} />
    </MuiThemeProvider>;
  });
