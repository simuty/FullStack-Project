import { Request, Response } from 'umi';
import { Random, mock, setup } from 'mockjs';

export default {
    'post /api/user/detail': (req: Request, res: Response) => {
        const { id } = req.body;
        //延时400s请求到数据
        // Mock.setup({
        //     timeout: 400
        // })
        const data = mock({
            id: id,
            avatar: Random.image('146x100', '#00405d', '#FFF', '🚩'),
            userName: Random.cname(),
            tel: Random.name(),
            sign: Random.cparagraph(2, 5)
        });
        res.json({
            status: 200,
            data,
        });
    },
    'post /api/user/edit': (req: Request, res: Response) => {
        //延时400s请求到数据
        // setup({
        //     timeout: 400
        // })
        res.json({
            status: 200,
            data: 'ok',
        });
    },
};
