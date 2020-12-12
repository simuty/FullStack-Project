
import * as path from 'path';

export default function Http(args: {
    url: string;
    method: string;
    headers?: any;
    body?: any;
    setLoading?: (l: boolean) => void,
    setResult?: (reslut: any) => void
}) {
    const { url, method, headers, body, setLoading, setResult } = args;

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
        setLoading && setLoading(true);
        fetch(urlPath, params)
            .then(res => res.json())
            .then(res => {
                const { status } = res;
                if (status === 200) {
                    resolve(res.data);
                    setResult && setResult(res.data);
                } else {
                    reject(res.errMsg);
                }
            })
            .catch(err => {
                reject(err);
            })
            .finally(() => {
                setLoading && setLoading(false);
            });
    });
}