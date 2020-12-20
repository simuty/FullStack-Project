import React, { useEffect } from 'react';
import { history } from 'umi';

export interface ITestProps {}

let observer: IntersectionObserver;
export default function Test(props: ITestProps) {
  useEffect(() => {
    console.log('进入页面');

    // https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry
    // http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html
    /**
     * 返回值
time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
target：被观察的目标元素，是一个 DOM 节点对象
rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
boundingClientRect：目标元素的矩形区域的信息
intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0
     */
    observer = new IntersectionObserver(entries => {
      console.log(entries);
    });
    // 开始观察
    observer.observe(document.querySelector('#loading')!);

    return () => {
      console.log('离开页面');
      if (observer) {
        // 停止监听
        observer.unobserve(document.querySelector('#loading')!);
        // 解绑监听
        observer.disconnect();
      }
    };
  }, []);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <div>
        <div
          id="loading"
          style={{
            marginTop: '1000px',
            backgroundColor: '#f60',
            width: '100px',
            height: 100,
          }}
        ></div>

        <button onClick={handleClick}>点击</button>
      </div>
    </div>
  );
}
