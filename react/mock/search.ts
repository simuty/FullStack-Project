/*
 * @Author: simuty
 * @Date: 2020-11-28 17:00:30
 * @LastEditTime: 2020-11-28 17:20:49
 * @LastEditors: Please set LastEditors
 * @Description:
 */
export default {
    // http get post 空格 URL
    // value: json || 函数
    'GET /api/getListAsync': {
        lists: ['100', '200', '300'],
    },
    'GET /api/getList': (req: any, res: any) => {
        setTimeout(() => {
            res.json({
                lists: Array(10).fill(req.query.value),
            });
        }, 1000);
    },
};
