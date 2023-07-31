import { Request, Response } from 'express';

class MemoController {
  getData = (req: Request, res: Response) => {
    res.send('hihihi');
  }
}

export default MemoController;