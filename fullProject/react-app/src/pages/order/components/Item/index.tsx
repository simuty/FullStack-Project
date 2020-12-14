import * as React from 'react';

// props展开即可
export interface IItemProps {
  id: string;
  img: string;
  title: string;
  price: string;
  createTime: string;
  // 是否支付
  type: number;
}

export default function Item(props: IItemProps) {
  const {
    id = '',
    img = '',
    title = '',
    price = '0',
    createTime = '2020-10-10',
    type = 0,
  } = props;
  return (
    <div className="order-item" key={id}>
      <img alt="order" src={img} />
      <div className="center">
        <div className="title">{title}</div>
        <div className="price">￥{price}</div>
        <div className="time">{createTime}</div>
      </div>
      <div className="pay">{type === 0 ? '待支付' : '已支付'}</div>
    </div>
  );
}
