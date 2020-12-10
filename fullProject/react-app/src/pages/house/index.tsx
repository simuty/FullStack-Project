import * as React from 'react';
import Banner from './Banner';
import Info from './Info';
import List from './List';
import Footer from './Footer';

export interface IHouseProps {}

export default function House(props: IHouseProps) {
  return (
    <div className="house-page">
      {/* 滑动 */}
      <Banner />
      {/* 详情 */}
      <Info />
      {/* 评论列表 */}
      <List />
      {/* 底部 */}
      <Footer />
    </div>
  );
}
