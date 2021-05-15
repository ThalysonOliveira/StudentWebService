import StudentAverage from '../../api/StudentAverage';
import { BadRequestError } from '../../errors/HttpErros';
import Student from '../../models/Student';
import { StudentData, NotesData } from './CreateStudentServiceDTO';
class CreateStudentService {
  public async execute(studentData: StudentData, notesData: NotesData) {
    const { data } = await StudentAverage.post('/student-status', notesData);

    const studentExist = await Student.findOne({ email: studentData.email });

    if (studentExist)
      throw new BadRequestError(
        `O email "${studentData.email}" já esta em uso`,
      );

    const student = await Student.create({
      ...studentData,
      ...notesData,
      average: data.average,
      status: data.status,
    });

    return student;
  }
}

export default new CreateStudentService();
