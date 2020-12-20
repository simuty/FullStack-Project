/*
 * @Author: simuty
 * @Date: 2020-12-06 08:19:10
 * @LastEditTime: 2020-12-13 10:46:14
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import Mock from 'mockjs';
import { Response, Request } from 'umi';

export default {
  'POST /api/house/search': (req: Request, res: Response) => {
    const { kw, pageNum, lastId = 1 } = req.body;
    if (pageNum > 4) {
      res.json({
        status: 200,
        data: [],
      });
    } else {
      const data = Mock.mock({
        'list|16': [
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
      });
    }
  },

  'POST /api/house/detail': (req: Request, res: Response) => {
    const detail = Mock.mock({
      id: Mock.Random.id(),
      'banner|3': [
        {
          'id|+1': 1,
          img: () => Mock.Random.image('146x100', '#00405d', '#FFF', '😄'),
        },
      ],
      info: {
        title: Mock.Random.ctitle(),
        price: Mock.Random.integer(1, 100),
        msg: Mock.Random.ctitle(10),
        publishTime: Mock.Random.datetime(),
        beginTime: Mock.Random.datetime(),
        endTime: Mock.Random.datetime(),
      },
    });
    res.json({
      status: 200,
      data: { detail },
    });
  },
  'POST /api/house/comments': (req: Request, res: Response) => {
    const { page, pageSize, id } = req.body;
    const result = Mock.mock({
      'page|+1': page || 1,
      pageSize: pageSize,
      'list|6': [
        {
          'id|+1': () => Mock.Random.id(),
          img: () => Mock.Random.image('146x100', '#00405d', '#FFF', '😄'),
          userId: () => Mock.Random.id(),
          userName: () => Mock.Random.name(),
          descript: () => Mock.Random.word(),
          publishTime: () => Mock.Random.date(),
        },
      ],
    });
    if (page > 4) {
      res.json({
        status: 200,
        data: {
          page: page,
          list: [],
        },
      });
    } else {
      res.json({
        status: 200,
        data: result,
      });
    }
  },
  'POST /api/house/comment/add': (req: Request, res: Response) => {
      const {comment, userId} = req.body;
      res.json({
          status: 200,
          data: 'ok'
      })
  }
};
