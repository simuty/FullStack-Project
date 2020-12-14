import * as React from 'react';
import { Tabs, Badge } from 'antd-mobile';
import List from './components/List';
import './index.less';
import * as _ from "lodash";

export interface IOrderProps {}

enum PAY_TYPE {
    UNPID  = '0',
    PID  = '1',
}

export default function Order(props: IOrderProps) {
  const tabs = [
    { title: <Badge text={'3'}>未支付</Badge>, sub: 0 },
    { title: '已支付', sub: 1 },
  ];
  const handleChange = (tab: any, index: number) => {
    // console.log("handleChange---: ", tab, index);
  };
  const handleTabClick = (tab: any, index: number) => {
    // console.log("handleTabClick: ", tab, index);
  };

  const list = [
    {
      id: '111',
      img: '',
      title: '',
      price: '111',
      createTime: '2020-10-10',
      type: 1
    },
    {
      id: '0000',
      img: '',
      title: '',
      price: '0000',
      createTime: '2020-10-10',
      type: 0
    },
  ];

  const groupData = _.groupBy(list, 'type');
  const [unpaidList, paidList] = [groupData[PAY_TYPE.UNPID], groupData[PAY_TYPE.PID]]  

  return (
    <div className="order-page">
      <Tabs
        tabs={tabs}
        initialPage={0}
        onChange={(tab, index) => handleChange(tab, index)}
        onTabClick={(tab, index) => handleTabClick(tab, index)}
      >
        <div className="tab">
          <List list={unpaidList} />
        </div>
        <div className="tab">
          <List list={paidList} />
        </div>
      </Tabs>
    </div>
  );
}
