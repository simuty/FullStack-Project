import * as React from 'react';
import { Button } from 'antd-mobile';

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
  const renderPay = (type: number) => {
    switch (type) {
      case 0:
        return <Button type="warning" size='small' >去支付</Button>;
      case 1:
        return <Button type="ghost" size='small' >已支付</Button>;
      default:
        break;
    }
  };
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
      <div className="pay">{renderPay(type)}</div>
    </div>
  );
}
