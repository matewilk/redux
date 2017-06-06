import React from 'react';
import { FlatButton } from 'material-ui';
import { List, ListItem} from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Listt extends React.Component {
  render () {
    return (
      <List>
        {
          this.props.list.map((item) => {
            return (
              <ListItem
                key={item.id}
                primaryText={item.value}
                rightIconButton={
                  <FlatButton
                    onClick={() => { this.props.removeItem(item); }}
                    icon={<NavigationClose />}
                    style={{marginTop: '6px'}}
                    label='Remove'
                  />
                }
              />
            );
          })
        }
      </List>
    );
  }
}

export default Listt;
