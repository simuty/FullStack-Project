import * as React from 'react';

export interface ISonProps {
    name: string;
    handleChild: Function;
    brother?: string;
}

export interface ISonState {}

export default class Son extends React.Component<ISonProps, ISonState> {
    constructor(props: ISonProps) {
        super(props);
        this.state = {};
    }
    handleClick = () => {
        this.props.handleChild('子->父');
    };

    public render() {
        return (
            <div>
                <h1>第一个子组件</h1>
                <h2>接受父组件传的值：{this.props.name}</h2>
                <h2 onClick={this.handleClick}>点击实现：子传父，看console</h2>
                <h2>接收到兄弟组件的值：{this.props.brother}</h2>
            </div>
        );
    }
}
