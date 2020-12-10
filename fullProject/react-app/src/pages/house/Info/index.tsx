import * as React from 'react';
import { Button } from 'antd-mobile';
import '../../house/index.less';

export interface IInfoProps {}

export default function Info(props: IInfoProps) {
  return (
    <div className="info">
      <div className="info-title">{'info-title'}</div>
      <div className="info-msg">{'info-title'}</div>
      <div className="info-price">{'info-title'}</div>
      <div className="info-time">{'info-title'}</div>
      <div className="info-time">{'info-title'}</div>
      <div className="info-time">{'info-title'}</div>
      <Button className="info-btn" type="warning">
        预定
      </Button>
    </div>
  );
}
