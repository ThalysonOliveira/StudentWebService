import Api1 from '../axios/index';
import Student from '../models/Student';

import { StudentData } from './CreateStudentServiceDTO';

class CreateStudentService {
  public async execute(
    studentData: StudentData,
    notesData: string,
  ): Promise<any> {
    const { data } = await Api1.post('/student-status', notesData);

    const student = await Student.create({
      ...studentData,
      notesData,
      average: data.average,
      status: data.status,
    });

    return student;
  }
}

export default new CreateStudentService();
