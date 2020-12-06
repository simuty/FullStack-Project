import React, { useState, useEffect } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook, useObserveHook } from '@/hook';

import './index.less';
export interface ISearchProps {}

export default function Search(props: ISearchProps) {
  // 搜索关键字
  const [houseKw, setHouseKw] = useState('');
  // 底部是否有数据
  const [showLoading, setShowLoading] = useState(true);
  // 分页
  const [pageObj, setPageObj] = useState({
    pageSize: 6,
    pageNum: 1,
  });
  // 列表数据
  const [houseList, setHouseList] = useState([]);
  // 获取搜索数据
  const [api_houses, api_housesLoading] = useHttpHook({
    url: 'house/search',
    method: 'POST',
    body: {
      kw: 'houseKw',
      ...pageObj,
    },
    // 3. 监听分页码的更改
    watch: [pageObj.pageNum],
  });

  /**
   * !针对列表有分页的页面，总的分几个步骤
   * 1. 【监听】loading是否展示--是否滑动到指定位置
   * 2. 修改分页数据---更新pageNumm
   * 3. 【监听】分页数据的更改，发送API请求，
   * 4. 【监听】loading的变化，拼装数据
   */
  useObserveHook([], '#loading', entries => {
    const isIntersecting = entries[0].isIntersecting; // true: 进入可视界面
    console.log('api_housesLoading', api_housesLoading, isIntersecting);
    if (!api_housesLoading && isIntersecting) {
      // 2. 更改分页数据
      setPageObj({
        ...pageObj,
        pageNum: pageObj.pageNum++,
      });
    }
  });

  // 4. 拼装数据
  useEffect(() => {
    // showLoading：false说明一个请求已经加载完毕
    if (!api_housesLoading && api_houses) {
      if (api_houses.length > 0) {
        // @ts-ignore
        setHouseList([...houseList, ...api_houses]);
      } else {
        setShowLoading(false);
      }
    }
  }, [api_housesLoading]);

  // handle
  const handleChange = (value: any) => {
    console.log(value);
    setHouseKw(value);
  };
  const handleCancel = (value: any) => {
    setHouseKw('');
  };
  const handleSubmit = (value: any) => {};

  return (
    <div className="search-page">
      {/* 搜索 */}
      <SearchBar
        placeholder="搜索民宿"
        // value={houseKw}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      ></SearchBar>
      {/* 搜索结果 */}
      <div className="result">
        {/* 列表数据 */}
        {!houseList.length ? (
          <ActivityIndicator toast />
        ) : (
          houseList.map((item: any) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="item-right">
                <div className="title">{item.title}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))
        )}
        {/* 底部监听&显示 */}
        {showLoading ? (
          <div id="loading">加载更多数据</div>
        ) : (
          <div>没有数据了</div>
        )}
      </div>
    </div>
  );
}
