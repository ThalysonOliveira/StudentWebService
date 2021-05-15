import Student from '../../models/Student';

class FilterStudentsService {
  public async Status(status: string) {
    const students = await Student.find({ status });

    return students;
  }

  public async Age(age: string, type: string) {
    let students;

    if (age && type === 'maior')
      return (students = await Student.find({ age: { $gte: age } }));

    if (age && type === 'menor') {
      return (students = await Student.find({ age: { $lte: age } }));
    }

    students = await Student.find({ age });
    return students;
  }

  public async Notes(startNote: string, endNote: string) {
    const students = await Student.find({
      note1: { $gte: startNote },
      note3: { $lte: endNote },
    });

    return students;
  }
}

export default new FilterStudentsService();
