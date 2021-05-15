import { Response } from 'express';
import Log from 'node-color-log';
import { BadRequestError, NotFoundError } from './HttpErros';

class HttpResponse {
  Ok(response: Response, message: string, data?: unknown) {
    const responseJSON = {
      statusCode: 200,
      message,
      data,
    };

    return response.status(responseJSON.statusCode).json(responseJSON);
  }

  Created(response: Response, message: string, data?: unknown) {
    const responseJSON = {
      statusCode: 201,
      message,
      data,
    };

    return response.status(responseJSON.statusCode).json(responseJSON);
  }

  NoContent(response: Response) {
    return response.status(204).send();
  }

  BadRequest(response: Response, message: string) {
    const responseJSON = {
      status: 400,
      error: 'Bad Request',
      message,
    };

    return response.status(responseJSON.status).json(responseJSON);
  }

  NotFound(response: Response, message: string, data?: unknown) {
    const responseJSON = {
      statusCode: 404,
      error: 'Not Found',
      message,
      data,
    };

    return response.status(responseJSON.statusCode).json(responseJSON);
  }

  ServerError(response: Response) {
    const errorResponseJSON = {
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'Erro interno no servidor.',
    };

    return response
      .status(errorResponseJSON.statusCode)
      .json(errorResponseJSON);
  }
  GetError(response: Response, error: Error) {
    if (error instanceof BadRequestError) {
      return this.BadRequest(response, error.message);
    }

    if (error instanceof NotFoundError) {
      return this.NotFound(response, error.message);
    }

    Log.error(error);

    return this.ServerError(response);
  }
}

export default new HttpResponse();
