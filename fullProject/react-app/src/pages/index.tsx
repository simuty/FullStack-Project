import React from 'react';
import styles from './index.less';

import { MenuBar } from '@/components/index';
import { useLocation } from 'umi';

export default () => {
  const location = useLocation();
  const paths = ['/', '/user', '/order'];

  return (
    <div>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      >
        <h1 className={styles.title}>Page index</h1>
      </MenuBar>
    </div>
  );
};
