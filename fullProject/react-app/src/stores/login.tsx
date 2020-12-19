import { Http } from '@/utils'
import { history } from 'umi';
import { Toast } from 'antd-mobile'
import { cookie, urlGet } from 'project-libs';

type CollectionStateType = {
    id: string;
    userName: string;
    avatar: string;
    tel: string;
    sign: string;
};
type CollectionModelType = {
    namespace: string;
    state: CollectionStateType;
    effects: {
        loginAsync: any;
        registerAsync: any;
    };
    reducers: {
        login: any;
        register: any;
    };
};
const Login: CollectionModelType = {
    namespace: 'login',
    state: {
        id: '',
        userName: '',
        avatar: '',
        tel: '',
        sign: '',
    },
    reducers: {
        login(state: CollectionStateType, payload: CollectionStateType) {
            return {
                ...state,
                payload,
            };
        },
        register(state: CollectionStateType, payload: CollectionStateType) {
            return {
                ...state,
                payload,
            };
        },
    },
    effects: {
        async loginAsync(dispatch: any, rootState: any, payload: { userName: string, pwd: string }) {
            const result = await Http({
                url: 'login',
                body: payload
            })
            if (result) {
                Toast.success('登陆成功');
                cookie.set('user', JSON.stringify(result));
                const from = urlGet('from');
                history.push({
                    pathname: from
                })
            } else {

            }
        },
        async registerAsync(dispatch: any, rootState: any, payload: { id: string, userName?: string, tel?: string, sign?: string }) {
            const result = await Http({
                url: 'register',
                body: payload
            })
            console.log(result);
            if (result) {
                Toast.success('注册成功');
                history.push({
                    pathname: '/'
                })
            } else {

            }
        }
    },
};
export default Login;
