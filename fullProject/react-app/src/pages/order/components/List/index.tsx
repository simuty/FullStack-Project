import * as React from 'react';
import Item, { IItemProps }  from '../Item';
import {ActivityIndicator} from 'antd-mobile'

export interface IListProps {
  list: IItemProps[];
}

export default function List(props: IListProps) {
  const { list = [] } = props;
  return (
    <div>
      {[].length ? list.map(item => (
        <Item {...item} />
      )) : <ActivityIndicator toast text="请求数据中..." />
    }
    </div>
  );
}
