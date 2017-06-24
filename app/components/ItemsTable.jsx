import React from 'react';
import {
  FlatButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

class ItemsTable extends React.Component {
  getButton (item, action) {
    return (
      <FlatButton
        onClick={(event) => {
          event.stopPropagation();
          this.props[`${action}Item`](item);
        }}
        icon={action === 'edit' ? <EditorModeEdit /> : <NavigationClose />}
        primary={action === 'edit'}
        secondary={action !== 'edit'}
        label={action}
      />
    );
  }

  getActionButtons (item) {
    return (
      <div>
        {this.getButton(item, 'edit')}
        {this.getButton(item, 'remove')}
      </div>
    );
  }

  render () {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>To Do</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Due Date</TableHeaderColumn>
            <TableHeaderColumn>Value</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            this.props.list.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableRowColumn>{item.name}</TableRowColumn>
                  <TableRowColumn>{item.category}</TableRowColumn>
                  <TableRowColumn>{item.duedate}</TableRowColumn>
                  <TableRowColumn>{item.value ? item.value : 0}</TableRowColumn>
                  <TableRowColumn children={this.getActionButtons(item)} />
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

export default ItemsTable;
