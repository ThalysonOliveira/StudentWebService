import { AverageStatus, NotesData } from './ReturnApprovalStatusDTO';

class ReturnApprovalStatus {
  public execute(notesData: NotesData): string | number | any {
    let averageStatus = {} as AverageStatus;

    const average = (notesData.note1 + notesData.note2 + notesData.note3) / 3;

    if (average >= 7) {
      averageStatus = {
        average,
        status: 'Aprovado',
      };

      return averageStatus;
    }

    averageStatus = {
      average,
      status: 'Reprovado',
    };

    return averageStatus;
  }
}

export default new ReturnApprovalStatus();
