import * as React from 'react';
import { SearchBar } from 'antd-mobile';
export interface ISearchProps {
    dispatch?: Function
}

export interface ISearchState {
    placeholder: string;
    value: string;
}

export default class Search extends React.Component<
    ISearchProps,
    ISearchState
> {
    constructor(props: ISearchProps) {
        super(props);

        this.state = {
            placeholder: "占位符",
            value: ''
        };
    }

    // 方法一
    // handleSubmit = (v: string) => {
    //     this.props.dispatch({
    //         // 命名空间+函数名
    //         type: 'search/getList',
    //         playload: v
    //     })
    // };
    // 方法二
    handleSubmit = (v: string) => {
        // @ts-ignore
        this.props.dispatch({
            // 命名空间+函数名
            type: 'search/getListAsync',
            playload: v
        })
    };
    handleOnChange = (v:string) => {
        this.setState({
            value: v
        })
    };

    public render() {
        return (
            <div>
                <SearchBar
                    autoFocus
                    placeholder={this.state.placeholder}
                    value={this.state.value}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleOnChange}
                />
            </div>
        );
    }
}
