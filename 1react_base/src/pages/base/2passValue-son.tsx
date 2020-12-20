import * as React from 'react';

export interface IChildProps {
    handleBrother: Function;
}

export interface IChildState {
}

export default class Child extends React.Component<IChildProps, IChildState> {
  constructor(props: IChildProps) {
    super(props);

    this.state = {
    }
  }
  handleClick = () => {
    this.props.handleBrother('子->子');
  }
  public render() {
    return (
      <div>
        <h1>第二个子组件</h1>
        <h2 onClick={this.handleClick} >点击将值传给第一个组件</h2>
      </div>
    );
  }
}
