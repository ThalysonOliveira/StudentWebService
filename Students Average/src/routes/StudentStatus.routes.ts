import { Router } from 'express';
import ReturnApprovalStatus from '../services/ReturnApprovalStatus';
import { NotesData } from '../services/ReturnApprovalStatusDTO';

const studentStatusRouter = Router();

studentStatusRouter.post('/student-status', async (request, response) => {
  try {
    const notesData: NotesData = request.body;
    return response.json(ReturnApprovalStatus.execute(notesData));
  } catch (error) {
    return response.json(error);
  }
});

export default studentStatusRouter;
