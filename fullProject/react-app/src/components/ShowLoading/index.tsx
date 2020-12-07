import * as React from 'react';
import './index.less'
import {CommonEnum} from '@/enum'

export interface IShowLoadingProps {
  showLoading: boolean;
}


export default function ShowLoading(props: IShowLoadingProps) {
  const { showLoading = true } = props;
  return (
    <div>
      {showLoading ? (
        <div id={CommonEnum.LOADING_NAME} className="loading">
          加载更多数据
        </div>
      ) : (
        <div className="loading">没有数据了</div>
      )}
    </div>
  );
}
