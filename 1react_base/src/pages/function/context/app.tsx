import React, { useContext, useEffect } from 'react';
import User from './user';
import { UserContext } from './userContext';
import { Button } from 'antd-mobile';

export interface IAppProps {}

export default function App(props: IAppProps) {
    // !默认不提示
    // @ts-ignore
    const { state: { isLogin, user }, dispatch } = useContext(UserContext);

    useEffect(() => {}, []);

    const handleClick = () => {
        dispatch({
            type: 'LOGIN',
            playload: true,
        });
    };
    console.log('isLogin', isLogin, user);

    return (
        <div>
            {isLogin ? (
                <User></User>
            ) : (
                <Button onClick={handleClick}>登陆</Button>
            )}
        </div>
    );
}
