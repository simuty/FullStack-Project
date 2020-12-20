import * as React from 'react';
import { Button } from 'antd-mobile';
import '../../house/index.less';
import {HDate} from '@/utils'

export interface IInfoProps {
  info: {
    title: string;
    price: number;
    msg: string;
    beginTime: string;
    endTime: string;
    publishTime: string;
  };
}

export default function Info(props: IInfoProps) {
  const {
    title = '',
    price = 0,
    msg = '',
    beginTime = '',
    endTime = '',
    publishTime = '',
  } = props.info;
  return (
    <div className="info">
      <div className="info-title">名称：{title}</div>
      <div className="info-msg">信息：{msg}</div>
      <div className="info-price">价格：{price}</div>
      <div className="info-time">发布时间：{HDate.formatOrCurren(publishTime, '')}</div>
      <div className="info-time">开始时间：{HDate.formatOrCurren(beginTime)}</div>
      <div className="info-time">结束时间：{HDate.formatOrCurren(endTime)}</div>
      <Button className="info-btn" type="warning">
        预定
      </Button>
    </div>
  );
}
