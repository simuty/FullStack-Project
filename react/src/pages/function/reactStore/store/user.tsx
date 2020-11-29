export default {
    state: {
        id: undefined,
        name: undefined
    },
    reducers: {
        /**
         * getUser 为dispatch type
         * @param state 上侧state
         * !@param payload 传入的参数
         */
        getUser(state: any, payload: any) {
            return {
                ...state,
                ...payload,
            }
        },
    },
    effects: {
        async getUserAsync(dispatch: any, rootState: any, payload: any) {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1000);
            })
            dispatch({
                type: 'getUser',
                payload,
            })
        }
    }

}