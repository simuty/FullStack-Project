import * as React from 'react';
import Child from './2passValue-child';
import Son from './2passValue-son';

export interface IPassValueProps {}

export interface IPassValueState {
    childText: string;
    brotherText: string;
}

/**
 * 组件传值
 * 1. 父->子: 通过prop，将PassValue.childText => child
 * 2. 子->父: 回调, 通过handleChild，将child中的值接收到并显示
 * 3. 兄弟->兄弟：通过父组件传递，son通过handleBrother，将son中的值接收到更新state-->child.brotherText
 */

export default class PassValue extends React.Component<
    IPassValueProps,
    IPassValueState
> {
    constructor(props: IPassValueProps) {
        super(props);

        this.state = {
            childText: '默认值为空',
            brotherText: '父作为中间人'
        };
    }

    // 1. 接受子组件传的值
    handleChild = (msg: string) => {
        console.log('父组件接收到child的信息:', msg);
        this.setState({
            childText: msg,
        });
    };

    // 2. 父作为中间人，将son=>child
    handleBrother = (msg: string) => {
        console.log('父组件接收到child的信息，然后传给另外一个组件:', msg);
        this.setState({
            brotherText : msg,
        });
    }

    render() {
        return (
            <div>
                <h1> 父组件</h1>
                <h2>此处接受子组件传的值： {this.state.childText}</h2>
                <Child handleChild={this.handleChild} name={'父->子'} brother={this.state.brotherText}></Child>
                <Son handleBrother={this.handleBrother}></Son>
            </div>
        );
    }
}
