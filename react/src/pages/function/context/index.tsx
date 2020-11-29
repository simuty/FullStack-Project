import * as React from 'react';
import User from './user'
import App from './app'

import {UserContextProvider} from './userContext'


/**
 * 利用 context + hook + provider
 * 1. 不同的页面 从数据中心 context中获取、更新信息。
 */

export interface IContextProps {
}

export default function Context (props: IContextProps) {
  return (
    <UserContextProvider>
      <App {...props}></App>
    </UserContextProvider>
  );
}
