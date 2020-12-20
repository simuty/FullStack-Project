import { Effect } from 'dva';
import { Reducer } from 'redux';
import * as Service from '@/services/search'

type SearchStateType = {
    lists: any,
    text: string,
}; 
export type SearchModelType = {
    namespace: string,
    state: SearchStateType,
    effects: {},
    reducers: {},
};
const search: SearchModelType = {
    namespace: 'search',
    state: {
        lists: ['1', '2', '3'],
        text: 'dva',
    },
    // 同步方法
    reducers: {
        getList(state: SearchStateType, action: {playload: any}){
            return {
                ...state,
                lists: action.playload
            }
        }
    },
    // 异步方法
    effects: {
        // 模拟本地
        *getListAsyncLocal({playload}: any, {call, put}: any){
            // 直接模拟取数据
            yield put({
                type: 'getList',
                playload,
            })
        },
        // 模拟服务调用
        *getListAsync({playload}:any, {call, put}:any){
            const res = yield call(Service.getLists, playload);
            yield put({
                type: 'getList',
                playload: res.lists,
            })
        }
    },
};
export default search;
