import React, { useState } from 'react';
import Header from './components/header';
import Search from './components/search';
import Hot from './components/hot';
import { useHttpHook } from '@/hook';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [citys, citysLoading] = useHttpHook({
    url: 'common/citys',
    method: 'GET',
  });

  const [houses, housesLoading] = useHttpHook({
    url: 'house/hot',
    method: 'GET',
  });


  return (
    <div className="home">
      {/* 登陆 */}
      <Header></Header>
      {/* 搜索 */}
      <Search citys={citys} citysLoading={false}></Search>
      {/* 热门 */}
      <Hot houses={houses} housesLoading={housesLoading}></Hot>
    </div>
  );
}
