import { Router } from 'express';
import ReturnApprovalStatus from '../services/ReturnApprovalStatus';

const studentStatusRouter = Router();

studentStatusRouter.post('/student-status', async (request, response) => {
  try {
    return response.json(ReturnApprovalStatus.execute(request.body));
  } catch (error) {
    return response.json(error);
  }
});

export default studentStatusRouter;
