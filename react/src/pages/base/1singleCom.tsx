import * as React from 'react';

export interface IHandleFuncProps {
}

export interface IHandleFuncState {
    text: string,
}

export default class HandleFunc extends React.Component<IHandleFuncProps, IHandleFuncState> {

    constructor(props: IHandleFuncProps) {
        super(props);
        this.state = {
            text: 'demo'
        }
        console.log('constructor');
        // 1. 只有在组建初始化的时候，该方法才会初始化
        this.handleClick1 = this.handleClick1.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }



    // 组件将要被卸载
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    /** --------两个配套使用-------------  */
    static getDerivedStateFromProps(props: any, state: any) {
        console.log('getDerivedStateFromProps----');
        console.log(props, state);
        return state;
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return '返回：getSnapshotBeforeUpdate----';
    }
    /** ---------------------  */

    /**
     * 组件将要更新，如果返回true, render渲染组件，否则不渲染
     * 1. 如果传入的数值和目前一致，就不需要重新渲染了
     * !2. 如果采用pureComponent, 当state层级比较浅，可以自动判断是否更新，但是层级深的时候还是每次渲染
     * 
     * @param {*} props
     * @param {*} state
     * @returns
     * @memberof HandleFunc
     */
    shouldComponentUpdate(props: any, state: any) {
        console.log('shouldComponentUpdate---props', props);
        console.log('shouldComponentUpdate----state', state);
        console.log('this----state', this.state);
        // 1. 优化小技巧
        if (this.state.text !== state.text) {
            return true;
        }
        return false;
    }

    // 1. handleClick1
    handleClick1() {
        this.setState({
            text: '第一种方法'
        })
    }
    // 2. 每次渲染都会初始化该函数
    handleClick2() {
        this.setState({
            text: '第二种方法'
        })
    }

    // 3. 利用最新语法
    handleClick3 = () => {
        this.setState({
            text: '第三种方法'
        })
    }

    public render() {
        console.log('render----');
        return (
            <div>
                <div>
                    这个页面是为了学习，三种函数绑定 并且 更新 state.---{this.state.text}
                </div>
                <div onClick={this.handleClick1}>
                    第一种方法---{this.state.text}
                </div>
                <div onClick={this.handleClick2.bind(this)}>
                    第二种方法---{this.state.text}
                </div>
                <div onClick={this.handleClick3}>
                    第三种方法---{this.state.text}
                </div>
            </div>

        );
    }
}
