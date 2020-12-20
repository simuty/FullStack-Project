
import * as Mock from 'mockjs';

export default {
  // http get post 空格 URL
  // value: json || 函数
  'GET /api/common/citys': {
    status: 200,
    data: [
        [
          { label: '上海', value: '1000' },
          { label: '北京', value: '1001' },
        ],
      ]
  },
  'GET /api/house/hot': (req: any, res: any) => {
    const data = Mock.mock({
        'list|6-16': [{
            'id|+1': 1,
            'title': () => Mock.Random.ctitle(),
            'price':() =>  Mock.Random.integer(1, 100),
            'info':() => Mock.Random.ctitle(),
            'img':() => Mock.Random.image('146x100', '#00405d', '#FFF', '😄😜')
        }]
        
    })
    res.json({
      status: 200,
      data: data.list,
    });
  },

  'GET /api/hook/getList': (req: any, res: any) => {
    setTimeout(() => {
      res.json({
        status: 200,
        data: Array(10).fill(req.query.value),
        errMsg: 'aaaa',
      });
    }, 1000);
  },

  'POST /api/users/create': (req: any, res: any) => {
    res.end({
      status: 200,
      data: 'bbb',
      errMsg: 'aaaa',
    });
  },
};
