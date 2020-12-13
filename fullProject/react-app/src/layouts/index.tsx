// 和视频保持一致
import React from 'react';
import { MenuBar } from '@/components/index';
import { useLocation } from 'umi';
import {StoreProvider} from 'think-react-store';
import * as stores from '@/stores'
import log from 'think-react-store/middlewares/log';

export default (props: any) => {
    const location = useLocation();
    const paths = ['/', '/user', '/order'];
    return (
        <StoreProvider store={stores} middlewares={[log]}>
            <MenuBar
                show={paths.includes(location.pathname)}
                pathname={location.pathname}
            />
            {/* 后续再说，写了这句话，子页面加载才正常 */}
            {props.children}
        </StoreProvider>
    );
};
