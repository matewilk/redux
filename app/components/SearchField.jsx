import React from 'react';
import { TextField } from 'material-ui';
import SearchIcon from 'material-ui/svg-icons/action/search';

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
      <div style={{position: 'relative', display: 'inline-block'}}>
        <SearchIcon style={{position: 'absolute', right: 0, top: 40, width: 20, height: 20}} />
        <TextField
          hintText='filter items'
          floatingLabelText='filter items'
          onKeyUp={this.filter}
          style={{right: '0'}}
        />
      </div>
    );
  }
}

export default SearchField;
