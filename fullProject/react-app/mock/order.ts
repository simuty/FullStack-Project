import { Request, Response } from 'umi';
import { Random, mock } from 'mockjs';

export default {
  'post /api/order/list': (req: Request, res: Response) => {
    const { type } = req.body;
    const data = mock({
      'list|8': [
        {
          id: () => Random.guid(),
          img: () => Random.image('146x100', '#00405d', '#FFF', '🚩'),
          title: () => Random.cname(),
          price: () => Random.integer(0, 20),
          createTime: () => Random.date(),
          type: type,
        },
      ],
    });
    res.json({
      status: 200,
      data: {
        page: 1,
        pageSize: 8,
        pageTotal: 8,
        list: data.list,
      },
    });
  },
};
