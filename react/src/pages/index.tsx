import React from 'react';
import styles from './index.less';
import { List } from "antd-mobile";
import { Link } from 'umi';


export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <List>
          <List.Item>
              <Link to='/base/1singleCom'>
              单页面
              </Link>
          </List.Item>
          <List.Item>
              <Link to='/base/2passValue'>
              页面传值
              </Link>
          </List.Item>
          <List.Item>
              <Link to='/dva'>
              Dvajs
              </Link>
          </List.Item>
          <List.Item>
              <Link to='/function'>
              Hook
              </Link>
          </List.Item>
      </List>
    </div>
  );
}
