import * as React from 'react';
import Search from './search';
import Lists from './list';
import { connect } from 'dva'
import {SearchModelType} from '@/models/search';

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
// @ts-expect-error
export default connect(({search}: SearchModelType)=>({search}))(Dva)


// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// interface Props {
    
// }
// interface State {
    
// }

// export class index extends Component<Props, State> {
//     state = {}

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(index)
