import * as React from 'react';
import { SearchBar } from 'antd-mobile';

export interface ISearchProps {}

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

    handleSubmit = () => {};
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
