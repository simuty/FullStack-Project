import { useLayoutEffect, useState } from "react";

/**
 * 自定义hook： use+含义+Hook
 * 功能：更新documentTitle
 * @param title 
 */
export default function useTitleHook(title: string) {
    // 利用hook设置value
    const [state, setstate] = useState('')
    // 类似与useEffect
    useLayoutEffect(() => {
        document.title = title;
        setstate(title);
    }, [title])
    return state;
}