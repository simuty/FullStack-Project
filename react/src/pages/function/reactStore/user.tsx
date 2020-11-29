import React, {useEffect} from 'react';
import { useStateHook, useDispatchHook, useStoreHook } from 'think-react-store';

export interface IUserProps {}

export default function User(props: IUserProps) {
    // !第一种方式采用useStoreHook获取全部信息
    // const {
    //     // @ts-ignore
    //     user: { id, name, getUser, getUserAsync },
    // } = useStoreHook();
    // console.log(id, name);
    // useEffect(() => {
    //     console.log('aaaa');
    //     getUserAsync({
    //         id: 100,
    //         name: 'jack'
    //     })
    // }, [])


    // 2. 第二种方式
    // @ts-ignore
    const {id, name} = useStateHook('user');
    // @ts-ignore
    const dispatch = useDispatchHook();
    const handleClick = () => {
        // @ts-ignore
        dispatch({
            key: 'user',
            type: 'getUserAsync',
            payload: {
                id: 200,
                name: 'admin'
            }
        })
    }


    return (
        <div>
            <h2>user</h2>
            <br />
            <h3>userId: {id}</h3>
            <br />
            <h3>userName: {name}</h3>
            <br/>
            <button onClick={handleClick}>点击更新</button>
        </div>
    );
}
