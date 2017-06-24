import React from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from 'reflexbox';
import shortid from 'shortid';

import {
  addItem,
  removeItem,
  filterItems
} from '../actions/actions';

import InputField from './InputField';
import SearchField from './SearchField';
import List from './List';

class Parent extends React.Component {
  createItem (value) {
    return {
      value: value,
      id: shortid.generate()
    };
  }

  addItem (newValue) {
    let item = this.createItem(newValue);
    this.props.dispatch(addItem(item));
  }

  removeItem (item) {
    this.props.dispatch(removeItem(item.id));
  }

  filter (value) {
    this.props.dispatch(filterItems(value));
  }

  render () {
    return (
      <div>
        <Flex align='center'>
          <Box px={2}>
            <InputField addItem={this.addItem.bind(this)} />
          </Box>
          <Box px={2} ml='auto'>
            <SearchField filter={this.filter.bind(this)} />
          </Box>
        </Flex>
        <div>
          <List list={this.props.list} removeItem={this.removeItem.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { list, filter } = state;
  let filteredList = list.filter(
    (item) => {
      return filter ? item.value.indexOf(filter) > -1 : true;
    }
  );

  return ({
    list: filteredList
  });
}

export default connect(mapStateToProps)(Parent);
