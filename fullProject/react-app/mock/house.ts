/*
 * @Author: simuty
 * @Date: 2020-12-06 08:19:10
 * @LastEditTime: 2020-12-06 14:55:24
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import Mock from 'mockjs';

export default {
  'POST /api/house/search': (req: any, res: any) => {
    const { kw, pageNum, lastId = 1 } = req.body;
    if (pageNum > 4) {
      res.json({
        status: 200,
        data: [],
      });
    } else {
      const data = Mock.mock({
        'list|6-16': [
          {
            'id|+1': 1,
            hey: kw,
            title: () => Mock.Random.ctitle(),
            price: () => Mock.Random.integer(1, 100),
            info: () => Mock.Random.ctitle(),
            img: () => Mock.Random.image('146x100', '#00405d', '#FFF', '😄😜'),
          },
        ],
      });
      res.json({
        status: 200,
        data: data.list,
        test: req.body
      });
    }
  },
  //   'GET ': (req: any, res: any) => {},
  //   'GET ': (req: any, res: any) => {},
};
