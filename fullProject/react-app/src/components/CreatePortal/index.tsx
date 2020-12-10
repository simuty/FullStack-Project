import * as React from 'react';
import ReactDOM from 'react-dom';

export interface ICreatePortalProps {}

export interface ICreatePortalState {}

export default class CreatePortal extends React.Component<
  ICreatePortalProps,
  ICreatePortalState
> {
  body: HTMLBodyElement | null;
  ele: HTMLDivElement;
  constructor(props: ICreatePortalProps) {
    super(props);

    this.state = {};
    this.body = document.querySelector('body');
    this.ele = document.createElement('div');
  }

  componentDidMount() {
    this.ele.setAttribute('id', 'portal-root');
    this.body?.appendChild(this.ele);
  }

  componentWillUnmount() {
    this.body?.removeChild(this.ele);
  }

  public render() {
    return ReactDOM.createPortal(this.props.children, this.ele)
  }
}
