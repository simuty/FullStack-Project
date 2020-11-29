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
                <WingBlank>
                    <List>
                        <List.Item>
                            <Link to="/function/hook">Hook</Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/function/context">Context</Link>
                        </List.Item>
                        <List.Item>
                            <Link to="/function/customize">useTitleHook</Link>
                        </List.Item>
                    </List>
                    <WhiteSpace></WhiteSpace>
                </WingBlank>
            </div>
        );
    }
}
