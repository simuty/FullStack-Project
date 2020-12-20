import * as React from 'react';
import { List } from 'antd-mobile';

export interface IListsProps {}

export interface IListsState {}

export default class Lists extends React.Component<IListsProps, IListsState> {
    constructor(props: IListsProps) {
        super(props);

        this.state = {};
    }

    public render() {
        const ListItem = List.Item;
        // @ts-ignore
        const list: string[] = this.props.search.lists;
        console.log(list);
        return (
            <div>
                <List>
                    {/* 遍历函数是小括号 */}
                    {list.map((item: string, i: number) => (
                        <ListItem key={i}>{item}</ListItem>
                    ))}
                </List>
            </div>
        );
    }
}
