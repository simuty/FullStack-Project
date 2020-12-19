import { Http } from '@/utils'
import {history} from 'umi';
import {Toast} from 'antd-mobile'
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
    effects: {};
    reducers: {
        getUser: any;
        editUser: any;
    };
};
const User: CollectionModelType = {
    namespace: 'user',
    state: {
        id: '',
        userName: '',
        avatar: '',
        tel: '',
        sign: '',
    },
    reducers: {
        getUser(state: CollectionStateType, payload: CollectionStateType) {
            return {
                ...state,
                payload,
            };
        },
        editUser(state: CollectionStateType, payload: CollectionStateType) {
            return {
                ...state,
                payload,
            };
        },
    },
    effects: {
        async getUserAsync(dispatch: any, rootState: any, payload: { id: string }) {
            const user = await Http({
                url: 'user/detail',
                body: payload
            })
            dispatch({
                type: 'getUser',
                payload: user,
            })
        },
        async editUserAsync(dispatch: any, rootState: any, payload: { id: string, userName?: string, tel?: string, sign?: string }) {
            const result = await Http({
                url: 'user/edit',
                body: payload
            })
            console.log(result);
            if(result){
                Toast.success('编辑成功');
                history.push({
                    pathname: '/user'
                })
            }else{

            }
        }
    },
};
export default User;
