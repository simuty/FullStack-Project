import * as React from 'react';
import { Link } from "umi";

import "../../index.less";

export interface IHomeProps {
}

export default function Home(props: IHomeProps) {
    return (
        <div className='header'>
            <div className='header_title'>民宿</div>
            <div className='header_login'>
                <Link to='/login'>登陆</Link> ｜ <Link to='/register'>注册</Link>
            </div>
        </div>
    );
}
