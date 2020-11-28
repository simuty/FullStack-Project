import * as React from 'react';
import { List } from 'antd-mobile';

export interface IListsProps {
}

export interface IListsState {
}

export default class Lists extends React.Component<IListsProps, IListsState> {
  constructor(props: IListsProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const ListItem = List.Item;
    console.log(this.props);
    return (
      <div>
          <List>
              <ListItem>

              </ListItem>
          </List>
      </div>
    );
  }
}
