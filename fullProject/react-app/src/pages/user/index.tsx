import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { List, Button } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';

import './index.less'
export interface IUserProps {
}

export default function User(props: IUserProps) {
    const [state, setState] = useState();
    const {
        // @ts-ignore
        user: { id, userName, avatar, tel, sign, getUserAsync }
    } = useStoreHook();

    const handleClick = () => {
        history.push({
            pathname: '/user/edit',
            query: {
                id: 1,
            },
        });
    };

    const handleLogout = () => {
        //   logoutAsync();
        history.push({
            pathname: '/login'
        });
    };

    useEffect(() => {
        getUserAsync({
            id: 1
        });
    }, []);

    //   const { avatar = '', phone = '', sign = '' } = props;

    return (
        <div className="user-page">
            {/**用户信息 */}
            <div className="info">
                <div className="set" onClick={handleClick}>
                    设置
        </div>
                <div className="user">
                    <img alt="user" src={avatar || "http://dummyimage.com/146x100/00405d/FFF&text=🚩"} />
                    <div className="tel">{tel}</div>
                    <div className="sign">{sign}</div>
                    <div>{userName}</div>
                </div>
            </div>
            {/**列表 */}
            <div className="lists">
                <List>
                    <List.Item arrow="horizontal">用户协议</List.Item>
                    <List.Item arrow="horizontal">常见问题</List.Item>
                    <List.Item arrow="horizontal">联系客服</List.Item>
                </List>
            </div>
            <Button style={{ marginTop: '100px' }} onClick={handleLogout}>
                退出登录
      </Button>
        </div>
    );
}
