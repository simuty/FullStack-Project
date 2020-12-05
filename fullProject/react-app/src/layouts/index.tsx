// 和视频保持一致
import React from 'react';

import { MenuBar } from '@/components/index';
import { useLocation } from 'umi';

export default (props: any) => {
  const location = useLocation();
  const paths = ['/', '/user', '/order'];
  return (
    <div>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      >
      </MenuBar>
      {/* 后续再说，写了这句话，子页面加载才正常 */}
      {props.children}
    </div>
  );
};
