import { useState, useEffect } from 'react';
import * as path from 'path';
import { Toast } from 'antd-mobile';
import { Http } from '@/util';

// api流向：service->httphook->http
export default function useHttpHook(args: {
    url: string;
    method: string;
    headers?: any;
    body?: any;
    watch?: any[];
}): [result: any, loading: boolean] {
    const { watch } = args;
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const _args = Object.assign({
        ...args, setResult, setLoading
    })
    useEffect(() => {
        Http(_args)
    }, watch)
    // 返回结果
    return [result, loading]
}
