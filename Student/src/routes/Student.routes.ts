import { Router } from 'express';
import HttpResponse from '../errors/HttpResponse';
import Log from 'node-color-log';
import Student from '../models/Student';
import CreateStudentService from '../services/CreateStudentService';

const studentRouter = Router();

studentRouter.get('/students', async (request, response) => {
  try {
    const students = await Student.find();

    return HttpResponse.Ok(
      response,
      'Todos os alunos listados com sucesso.',
      students,
    );
  } catch (error) {
    Log.error(error.message, error.stack);
    return HttpResponse.GetError(response, error);
  }
});

studentRouter.get('/students/:status/status', async (request, response) => {
  const { status } = request.params;
  try {
    const students = await Student.find({ status });

    return HttpResponse.Ok(
      response,
      `Todos os alunos ${status}s listados com sucesso.`,
      students,
    );
  } catch (error) {
    Log.error(error.message, error.stack);
    return HttpResponse.GetError(response, error);
  }
});

studentRouter.get('/students/:age/age', async (request, response) => {
  const { age } = request.params;
  try {
    const students = await Student.find({ age });

    return HttpResponse.Ok(
      response,
      `Todos os alunos com a idade de ${age} anos listados com sucesso.`,
      students,
    );
  } catch (error) {
    Log.error(error.message, error.stack);
    return HttpResponse.GetError(response, error);
  }
});

studentRouter.get(
  '/students/:note1/note1/:note2/note2/:note3/note3',
  async (request, response) => {
    const { note1, note2, note3 } = request.params;

    try {
      const students = await Student.find({ note1, note2, note3 });

      return HttpResponse.Ok(
        response,
        `Todos os alunos com as notas ${note1},${note2},${note3} listados com sucesso.`,
        students,
      );
    } catch (error) {
      Log.error(error.message, error.stack);
      return HttpResponse.GetError(response, error);
    }
  },
);

studentRouter.post('/students', async (request, response) => {
  const studentData = request.body.student;
  const noteData = request.body.notes;

  try {
    const student = await CreateStudentService.execute(studentData, noteData);

    return HttpResponse.Created(
      response,
      'Aluno cadastrado com sucesso.',
      student,
    );
  } catch (error) {
    Log.error(error);
    return HttpResponse.GetError(response, error);
  }
});

export default studentRouter;
