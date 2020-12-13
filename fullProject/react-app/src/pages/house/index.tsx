import React, { useEffect } from 'react';
import Banner from './Banner';
import Info from './Info';
import List from './List';
import Footer from './Footer';
import { useObserveHook } from '@/hook';
import { useDispatchHook, useStateHook, useStoreHook } from 'think-react-store';
import { CommonEnum } from '@/enum';
import { useLocation } from 'umi';


export interface IHouseProps {}

export default function House(props: IHouseProps) {
  const {
    // @ts-ignore
    house: {
      detail,
      comments,
      showLoading,
      reloadCommentsNum,
      reloadComments,
      getDetailAsync,
      getCommentsAsync,
      resetState,
    },
  } = useStoreHook();

  const {query} = useLocation()
  /**
   * 整体思路
   * 1. 父控件中管理数据，子控件是负责显示
   * 2. 父控件控制：触发、加载、更新数据
   *
   *
   * 1. 监听loading 是否展示出来
   *    1. 在父控件，监听子控件中的ele标签
   *    2. useObserveHook中可以打印回调函数的监听方法
   * 2. 触发reload，修改分页
   *    1. showLoading 在数据源获取中直接判断并返回 是否还有更多数据
   *    2. 该父组件中可以监听到【加载】显示，则触发数据源中的函数，更新page,
   *        下次getCommentsAsync时候，调用下页
   * 3. 监听reload变化，重新请求接口
   * 4. 拼装数据
   */
  // ! 监听comments, showLoading
  useObserveHook(
    [comments, showLoading],
    CommonEnum.LOADING_NAME_USE,
    entries => {
      // console.log('entries', comments.length, showLoading, entries[0].isIntersecting);
      if (
        comments &&
        comments.length &&
        showLoading &&
        entries[0].isIntersecting
      ) {
        // p1. reload显示出来，更新page, 触发 p2
        reloadComments();
      }
    },
  );
  
  // 获取详情
  useEffect(() => {
    getDetailAsync({
        id: query.id,
    });
  }, []);

  // p2. 监听页码变化
  useEffect(() => {
    getCommentsAsync({
        id: query.id,
    });
  }, [reloadCommentsNum]);

  useEffect(() => {
      return () => {
        //   页面离开
        resetState({
            detail: {}
        })
      }
  }, [])

  const { banner = [], info = {} } = detail;
  return (
    <div className="house-page">
      {/* 滑动 */}
      <Banner banner={banner} />
      {/* 详情 */}
      <Info info={info} />
      {/* 评论列表 */}
      <List showLoading={showLoading} comments={comments} />
      {/* 底部 */}
      <Footer />
    </div>
  );
}
