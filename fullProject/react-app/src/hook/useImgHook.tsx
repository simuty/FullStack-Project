import { useEffect } from 'react';
import {isEmpty} from 'project-libs'

let observer: IntersectionObserver;
/**
 * 图片懒加载
 * 1. 监听元素是否进入可视化区域
 * 2. 将src的值改为真实的图片地址，临时图片地址放在data-src中
 * 3. 停止监听节点
 *
 * @param watch 是否监听
 * @param ele 元素id classname
 * @param callback 回调函数
 */
export default function useImgHook(
  watch: any | any[],
  ele: string,
  callback?: (entries: IntersectionObserverEntry[]) => void,
) {
  useEffect(() => {
    const nodes = document.querySelectorAll(ele);
    observer = new IntersectionObserver(entries => {
      callback && callback(entries);
      if (!isEmpty(nodes)) {
        entries.forEach(item => {
          //   console.log('dataSrc--item', item.target);
          // 进入可视化区域
          if (item.isIntersecting) {
            // 将临时的改为正式的图片
            const dataSrc = item.target.getAttribute('data-src');
            item.target.setAttribute('src', dataSrc!);
            observer.unobserve(item.target);
          }
        });
      }
    });

    nodes.forEach(item => {
      observer.observe(item);
    });
    return () => {
      if (nodes && nodes.length && observer) {
        observer.disconnect();
      }
    };
  }, watch);
}
