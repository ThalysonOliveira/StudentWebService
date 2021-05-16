import { Router } from 'express';
import HttpResponse from '../errors/HttpResponse';
import Log from 'node-color-log';
import Student from '../models/Student';
import CreateStudentService from '../services/CreateStudent/CreateStudentService';
import FilterStudentsService from '../services/FitlerStudent/FilterStudentsService';
import {
  Notes,
  Status,
  StudentByAge,
} from '../services/FitlerStudent/FilterStudentsServiceDTO';

const studentRouter = Router();

studentRouter.get('/', async (request, response) => {
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

studentRouter.get('/status', async (request, response) => {
  const { status } = request.query as Status;
  try {
    if (!status)
      return HttpResponse.BadRequest(
        response,
        'Adicione ?status={Aprovado/Reprovado} no endpoint',
      );

    const statusStudent = await FilterStudentsService.Status(status);
    return HttpResponse.Ok(
      response,
      `Todos os alunos ${status}s listados com sucesso.`,
      statusStudent,
    );
  } catch (error) {
    Log.error(error.message, error.stack);
    return HttpResponse.GetError(response, error);
  }
});

studentRouter.get('/age', async (request, response) => {
  const { age, type } = request.query as StudentByAge;
  try {
    const studentsAge = await FilterStudentsService.Age(age, type);

    if (age && !type)
      return HttpResponse.Ok(
        response,
        `Todos os alunos com a idade de ${age} anos listados com sucesso.`,
        studentsAge,
      );

    return HttpResponse.Ok(
      response,
      `Todos os alunos com a idade ${type} ou igual a ${age} listados com sucesso.`,
      studentsAge,
    );
  } catch (error) {
    Log.error(error.message, error.stack);
    return HttpResponse.GetError(response, error);
  }
});

studentRouter.get('/notes', async (request, response) => {
  const { startNote, endNote } = request.query as Notes;
  try {
    const studentsNote = await FilterStudentsService.Notes(startNote, endNote);

    return HttpResponse.Ok(
      response,
      `Todos os alunos com os intervalos de notas entre ${startNote} e ${endNote} listados com sucesso.`,
      studentsNote,
    );
  } catch (error) {
    Log.error(error.message, error.stack);
    return HttpResponse.GetError(response, error);
  }
});

studentRouter.post('/', async (request, response) => {
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
