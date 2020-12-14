import { Request, Response } from 'umi';
import { Random, mock } from 'mockjs';

export default {
  'post /api/order/list': (req: Request, res: Response) => {
    const data = mock({
      'list|20': [
        {
          id: () => Random.id(),
          img: () => Random.image('146x100', '#00405d', '#FFF', '🚩'),
          title: () => Random.title(),
          price: () => Random.float(0, 100),
          createTime: () => Random.date(),
          type: () => Random.integer(0, 1),
        },
      ],
    });
    res.json({
        status: 200,
        data: {
            page: 1,
            pageSize: 20,
            pageTotal: 20,
            list: data.list,
        }
    })
  },
};
