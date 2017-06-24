import React from 'react';
import { TextField } from 'material-ui';

class InputField extends React.Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  submitValue (event) {
    if (event.key === 'Enter') {
      this.props.addItem(event.target.value);
      this.setState({value: ''});
    }
  }

  render () {
    return (
      <TextField
        hintText='Add item'
        floatingLabelText='Add item'
        value={this.state.value}
        onChange={this.handleChange}
        onKeyPress={this.submitValue}
      />
    );
  }
}

export default InputField;
