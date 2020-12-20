import { Http } from '@/utils';
// import { Reducer, Dispatch } from 'redux';

type CollectionStateType = {
  detail: object;
  comments: any[];
  pageObj: {
    page: number;
    pageSize: number;
  };
  showLoading: boolean;
  reloadCommentsNum: number;
};
type CollectionModelType = {
  namespace: string;
  state: CollectionStateType;
  reducers: {
    getDetail: any;
    getComments: any;
    getShouloading: any;
    reloadComments: any;
    resetState: any;
  };
  effects: {
    getDetailAsync: any;
    getCommentsAsync: any;
    addCommentAsync: any;
  };
};

const house: CollectionModelType = {
  namespace: 'house',
  state: {
    detail: {},
    comments: [],
    pageObj: {
      page: 1,
      pageSize: 20,
    },
    showLoading: true,
    reloadCommentsNum: 0,
  },
  reducers: {
    getDetail(state: any, payload: any) {
      return { ...state, ...payload };
    },
    getComments(state: any, payload: any) {
      return { ...state, comments: payload };
    },
    getShouloading(state: any, payload: any) {
      return { ...state, showLoading: payload };
    },
    // 更新page,保证下次是下一页,
    reloadComments(state: any, payload: any) {
      return {
        ...state,
        reloadCommentsNum: state.reloadCommentsNum + 1,
        pageObj: {
          page: state.reloadCommentsNum + 1,
        },
      };
    },
    // 重置
    resetState(state: any, payload: any) {
      return {
        ...state,
        ...payload,
        comments: [],
        pageObj: {
          page: 1,
          pageSize: 20,
        },
        showLoading: true,
        // 重置后，会重新调用加载 评论 list
        // !bug,如果在第一页
        reloadCommentsNum: 0,
      };
    },
  },
  effects: {
    async getDetailAsync(
      dispatch: any,
      rootState: CollectionStateType,
      payload: any,
    ) {
      const result = await Http({
        url: '/house/detail',
        body: payload,
      });
      dispatch({
        type: 'getDetail',
        payload: result,
      });
    },
    async getCommentsAsync(
      dispatch: any,
      rootState: any,
      payload: { page: number; pageSize: number; id: number },
    ) {
      const { pageObj, comments } = rootState.house;
      const result = await Http({
        url: '/house/comments',
        body: {
          ...payload,
          page: pageObj.page,
          pageSize: pageObj.pageSize,
        },
      });
      // @ts-ignore 后续完善，服务返回错误的情况
      const { list = [] } = result;
      dispatch({
        type: 'getComments',
        payload: [...comments, ...list],
      });
      dispatch({
        type: 'getShouloading',
        payload: list.length ? true : false,
      });
    },

    async addCommentAsync(
      dispatch: any,
      rootState: CollectionStateType,
      payload: { comment: string; userId: number, id: number },
    ) {
      const result = await Http({
        url: '/house/comment/add',
        body: payload,
      });
      if (result) {
        // 重置
        dispatch({
          type: 'resetState',
          // 不重置detail
          payload: {},
        });
      }
    },
  },
};
export default house;
