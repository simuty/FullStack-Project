import * as React from 'react';
import { Link } from 'umi';
import { List, WingBlank, WhiteSpace } from 'antd-mobile';

export interface IHookProps {}

export interface IHookState {}

export default class Hook extends React.Component<IHookProps, IHookState> {
    constructor(props: IHookProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div>
                <h2>数据流管理</h2>
                <WingBlank>
                    <List>
                        <List.Item>
                            <Link to="/function/hook">Hook</Link>
                        </List.Item>
                        <WhiteSpace />

                        <List.Item>
                            <Link to="/function/context">Context</Link>
                        </List.Item>
                        <WhiteSpace />

                        <List.Item>
                            <Link to="/function/customize">Customize</Link>
                        </List.Item>
                        <WhiteSpace />

                        <List.Item>
                            <Link to="/function/reactStore">store</Link>
                        </List.Item>
                        <WhiteSpace />
                    </List>
                </WingBlank>
            </div>
        );
    }
}
