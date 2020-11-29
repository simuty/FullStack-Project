import React, { useEffect, useState, useLayoutEffect, useMemo} from 'react';
import { List, WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'umi';


/**
 * hook中useEffect, useState, useLayoutEffect, useMemo的基本用法以及概念。
 */

export interface IFunctionProps {}

export default function Function(props: IFunctionProps) {
    // 1. hook： 名字、set名字，默认值
    const [count, setCount] = useState(0);
    const [text, setText] = useState(0);

    // 2. 设置count
    const handleClick = () => {
        setCount(count + 1);
    };
    /**
     * 3. useeffect等价于类生命周期函数 DidMount
     * !主要用于：调用异步函数，多个useEffect之间互补影响，按先后顺序执行
     * 
     * 3.1 第一个参数：函数
     * 3.2 第二个参数：依赖项数组，
     *        1. 不传，每次都执行第一个参数
     *        2. 如果为空，只会在初始化的时候 触发第一个参数函数。
     *        3. 数组有依赖项 & 有改动，则调用参数函数
     * 3.4 执行异步函数， 外侧写async, useeffect中调用
     * 3.5 
     *
     */

    // useEffect(() => {
    //     console.log('useEffect');
    // }, [])
    async function aaaa() {
        console.log('async函数');
    }
    useEffect(() => {
        console.log('useEffect');
        aaaa();
    });

    /**  
     * 4. useLayoutEffect: 主要用于页面相关的操作
     */
    useLayoutEffect(() => {
        console.log('useLayoutEffect');
    }, [])


    /** 
     * 5. useMemo 主要为了渲染次数，在没有使用之前，每次值改变，useEffect、useLayoutEffect、handleTextClick都会被调用
     * !没发现有啥用。。。还是不会用吧
     */
    // 该函数在text没有被改变的情况下依然被调用
    const handleTextClick = ()=>{
        console.log('text changed');
        setText(text+2);
        return text;
    }

    const memoText = useMemo(() => {
        console.log('text changed--useMemo');
        return text;
    }, [text])


    return (
        <div>
            <WingBlank>
                <Link to='/hook'></Link>
                <List>
                    <List.Item onClick={handleClick}>
                        {/* 直接使用 */}
                        点击+1：{count}
                    </List.Item>
                    <List.Item onClick={handleTextClick}>
                        {/* 直接使用 */}
                        text: {handleTextClick}
                    </List.Item>
                    <List.Item>
                        {/* usememo，并没有感觉 */}
                        memoText: {memoText}
                    </List.Item>
                </List>
                <WhiteSpace></WhiteSpace>
            </WingBlank>
        </div>
    );
}
