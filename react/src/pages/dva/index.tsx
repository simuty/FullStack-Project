import * as React from 'react';
import Search from './search';
import Lists from './list';
import { connect } from 'dva'

export interface IDvaProps {}

export interface IDvaState {}

class Dva extends React.Component<IDvaProps, IDvaState> {
    constructor(props: IDvaProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <div>
                <h2>dva</h2>
                <Search {...this.props}></Search>
                <Lists {...this.props}></Lists>
            </div>
        );
    }
}
// @ts-ignore
export default connect(({search})=>({search}))(Dva)
