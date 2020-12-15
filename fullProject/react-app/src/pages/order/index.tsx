import React, { useState, useEffect, Dispatch } from 'react';
import { Tabs, Badge } from 'antd-mobile';
import List from './components/List';
import './index.less';
import * as _ from 'lodash';
import { useObserveHook } from '@/hook';
import { Http } from '@/utils';
import { CommonEnum } from '@/enum';
import { entries } from 'lodash';

export interface IOrderProps {}

// 支付状态
enum PAY_TYPE {
  UNPAID = 0,
  PAID = 1,
}

export default function Order(props: IOrderProps) {
  const tabs = [
    { title: <Badge text={'3'}>未支付</Badge>, sub: 0 },
    { title: '已支付', sub: 1 },
  ];
  const [orderList, setOrderList] = useState([]);
  const [pageObj, setPageObj] = useState(CommonEnum.PAGEOBJ);

  const [showLoading, setShowLoading] = useState(true);
  const [type, setType] = useState(PAY_TYPE.UNPAID);

  /**
   * 加载分页数据
   * 1. 页面中：监听到load,直接page++,调用http请求【当前页面】
   * 2. model中：监听load, observerPage++，进而加载下一页，【评论页面采用的方式】
   *
   * - 进入页面，默认请求数据
   * - 监听load, 变化则pagenum++
   * - useeffect 监听 pagenum
   * - 调用http请求
   *
   * 注意：
   * - 记得在子页面加入被监听的load组件
   */
  // 加载更多
  useObserveHook(null, CommonEnum.LOADING_NAME_USE, async entries => {
    const list = await invokeHttp(pageObj.pageNum);
    if (entries[0].isIntersecting) {
      if (list) {
        setPageObj({
          ...pageObj,
          pageNum: pageObj.pageNum + 1,
        });
        // @ts-ignore
        setOrderList([...orderList, ...list]);
        setShowLoading(true);
      } else {
        setShowLoading(false);
      }
    }
  });
  // 默认第一次进入页面
  useEffect(() => {
    fetchOrder(1);
    return () => {
      // 离开页面
      // setOrderList([])
    };
  }, [type]);

  /**
   * http 请求
   * @param page 页码
   */
  const fetchOrder = async (page: number) => {
    const list = await invokeHttp(page);
    if (list.length !== 0) {
      setShowLoading(true);
      // @ts-ignore
      setOrderList(list);
    } else {
      setShowLoading(false);
    }
  };

  const invokeHttp = async (pageNum: number) => {
    const result = await Http({
      url: '/order/list',
      body: {
        ...pageObj,
        pageNum,
        type,
      },
    });
    const list: any[] = _.get(result, 'list', []);
    return list;
  };

  const handleChange = (tab: any, index: number) => {
    setType(tab.sub);
    setPageObj(CommonEnum.PAGEOBJ);
    setOrderList([]);
    setShowLoading(true);
  };
  const handleTabClick = (tab: any, index: number) => {
    // console.log("handleTabClick: ", tab, index);
  };

  return (
    <div className="order-page">
      <Tabs
        tabs={tabs}
        initialPage={0}
        onChange={(tab, index) => handleChange(tab, index)}
        onTabClick={(tab, index) => handleTabClick(tab, index)}
      >
        <div className="tab">
          <List list={orderList} showLoading={showLoading} />
        </div>
        <div className="tab">
          <List list={orderList} showLoading={showLoading} />
        </div>
      </Tabs>
    </div>
  );
}
