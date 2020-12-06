import { useState, useEffect } from 'react';
import * as path from 'path';
import { Toast } from 'antd-mobile';

export default function useHttpHook(args: {
    url: string;
    method: string;
    headers?: any;
    body?: any;
    watch?: any[];
}): [result: any, loading: boolean] {
    const { url, method, headers, body, watch = [] } = args;
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    async function http() {
        const defaultHearder = new Headers({
            'Content-Type': 'application/json'
          })
        let params: any = {
            headers: defaultHearder,
            method,
            body: JSON.stringify(body),
        };
        // @ts-ignore
        if (method.toUpperCase === 'GET') {
            params = undefined;
        }
        const host = '/api/';
        const urlPath = path.join(host, url);
        return new Promise((resolve, reject) => {
            // 加载中
            setLoading(true);
            fetch(urlPath, params)
                .then(res => res.json())
                .then(res => {
                    const { status } = res;
                    if (status === 200) {
                        resolve(res.data);
                        setResult(res.data);
                    } else {
                        // toast 提示
                        Toast.fail(res.errMsg);
                        reject(res.errMsg);
                    }
                })
                .catch(err => {
                    Toast.fail(err);
                    reject(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    }
    useEffect(() => {
        http()
    }, watch)
    // 返回结果
    return [result, loading]
}
