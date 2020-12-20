import { useEffect } from 'react';

/**
 * 监听页面滚动
 * @param watch 是否更新, 传 null; observer触发的时候，触发内部useEffect一次
 * @param ele 元素表示，如id
 * @param callback 监听滚动的回调但是 注意回调函数的写法
 * 
 * 
 * !可以省去外界传ele.
 * 
 * 用法
 * 1. 饮用component中的加载更多组件，其中包含 ele = ‘xxx’
 * 2. 该hook,取到并监听对应的变化
 * 3. 回调返回值
 */
let observer: IntersectionObserver;
export default function useObserveHook(
  watch: any | any[],
  ele: string,
  callback?: (entries: IntersectionObserverEntry[]) => void,
) {
  useEffect(() => {
    const node = document.querySelector(ele);
    if (node) {
      observer = new IntersectionObserver(entries => {
        callback && callback(entries);
      });
      observer.observe(node);
    }
    return () => {
      if (observer && node) {
        // 停止监听
        observer.unobserve(node);
        // 解绑监听
        observer.disconnect();
      }
    };
  }, watch);
}

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
