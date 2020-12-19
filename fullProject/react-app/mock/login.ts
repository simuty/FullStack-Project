import { Request, Response } from 'umi';
import { Random, mock, setup } from 'mockjs';

export default {
    'post /api/login': (req: Request, res: Response) => {
        const { userName, pwd } = req.body;
        const data = mock({
            id: Random.guid(),
            avatar: Random.image('146x100', '#00405d', '#FFF', '🚩'),
            userName: userName,
            tel: Random.name(),
            sign: Random.cparagraph(2, 5)
        });
        res.json({
            status: 200,
            data,
        });
    },
    'post /api/register': (req: Request, res: Response) => {
        const { userName, pwd } = req.body;
        const data = mock({
            id: Random.guid(),
            avatar: Random.image('146x100', '#00405d', '#FFF', '🚩'),
            userName: userName,
            tel: Random.name(),
            sign: Random.cparagraph(2, 5)
        });
        res.json({
            status: 200,
            data,
        });
    },
};
