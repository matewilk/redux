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
import ItemsTable from '../app/components/ItemsTable';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Table data', module)
  .add('List', () => {
    let list = [
      {id: '234', value: 'test 1'},
      {id: '123', value: 'test 2'},
      {id: '432', value: 'test 3'}
    ];
    return <MuiThemeProvider>
      <List list={list} removeItem={() => { }} />
    </MuiThemeProvider>;
  })
  .add('Table', () => {
    let list = [
      {id: '234', name: 'wash the dishes', category: 'home', value: '5', duedate: '25/06/17'},
      {id: '123', name: 'receipts', category: 'business', value: '20', duedate: '27/06/17'},
      {id: '432', name: 'aqueous cream', category: 'shopping', value: '', duedate: '01/07/17'}
    ];
    return <MuiThemeProvider>
      <ItemsTable list={list} removeItem={() => {}} editItem={() => {}} />
    </MuiThemeProvider>;
  });
