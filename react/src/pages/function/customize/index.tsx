import React, { useState, useContext } from 'react';
import { useTitleHook, useHttpHook } from '@/hook';

export interface ICustomizeProps {}

export default function Customize(props: ICustomizeProps) {
    // 该文件采用hook,
    const [state, setState] = useState('customize');
    // 设置title的hook, state更新后，直接调用useTitleHook更新标签title
    const title = useTitleHook(state);
    const handleClick = () => {
        setState('doc titile change');
    }

    // hook 进行http 请求
    const args = {
        url: 'hook/getList?value=test',
        method: 'GET',
        // 监听state的value,如果改变则请求服务
        watch: [state]
    }
    const {loading, result}  = useHttpHook(args);
    console.log({loading, result});
    return <div>
        <h2>
            自定义hook，实现更新documentTitle http请求
        </h2>
        <h2 onClick={handleClick}> 点击更新title {title}</h2>
    </div>;
}
