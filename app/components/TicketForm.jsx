import React from 'react';
import { TextField, DatePicker, RaisedButton } from 'material-ui';
import { Flex, Box } from 'reflexbox';

class InputField extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      duedate: new Date(),
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleDate (event, date) {
    this.setState({duedate: date});
  }

  submitValue (event) {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({name: '', category: '', duedate: new Date(), value: ''});
  }

  render () {
    return (
      <form onSubmit={this.submitValue}>
        <Flex align='center'>
          <Box pr={2}>
            <TextField
              name='name'
              hintText='Name'
              floatingLabelText='Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Box>
          <Box p={2}>
            <TextField
              name='category'
              hintText='Category'
              floatingLabelText='Category'
              value={this.state.category}
              onChange={this.handleChange}
            />
          </Box>
          <Box p={2}>
            <DatePicker
              name='duedate'
              hintText='Due date'
              floatingLabelText='Due date'
              value={this.state.duedate}
              onChange={this.handleDate}
            />
          </Box>
          <Box p={2}>
            <TextField
              name='value'
              hintText='Value'
              floatingLabelText='Value'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Box>
          <Box p={1}>
            <RaisedButton label='Add' primary={true} type='submit' />
          </Box>
        </Flex>
      </form>
    );
  }
}

export default InputField;
