export class BadRequestError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string) {
    this.message = message;
    this.statusCode = 400;
  }
}

export class NotFoundError {
  public readonly message: string;
  statusCode: number;

  constructor(message: string) {
    this.message = message;
    this.statusCode = 404;
  }
}

export class InternalServerError {
  public readonly message: string;
  statusCode: number;

  constructor(message: string) {
    this.message = message;
    this.statusCode = 500;
  }
}
