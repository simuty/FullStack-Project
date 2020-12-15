import * as React from 'react';
import Item, { IItemProps } from '../Item';
import { ActivityIndicator } from 'antd-mobile';
import { ShowLoading } from '@/components';

export interface IListProps {
  list: IItemProps[];
  showLoading: boolean
}

export default function List(props: IListProps) {
  const { list = [], showLoading = true } = props;
  return (
    <div>
      {list.length ? (
        list.map(item => <Item {...item} />)
      ) : (
        <ActivityIndicator toast text="请求数据中..." />
      )}
      <ShowLoading showLoading={showLoading}></ShowLoading>
    </div>
  );
}
