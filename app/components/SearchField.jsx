import React from 'react';
import { TextField } from 'material-ui';

class SearchField extends React.Component {
  constructor (props) {
    super(props);

    this.filter = this.filter.bind(this);
  }

  filter (event) {
    this.props.filter(event.target.value);
  }

  render () {
    return (
      <TextField
        hintText='filter items'
        floatingLabelText='filter items'
        onKeyUp={this.filter}
      />
    );
  }
}

export default SearchField;
