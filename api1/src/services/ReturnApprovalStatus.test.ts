import ReturnApprovalStatus from './ReturnApprovalStatus';

describe('Return approval status', () => {
  test('Should return a approved status', () => {
    const notes = { note1: 8, note2: 8, note3: 8 };
    const returnStatus = ReturnApprovalStatus.execute(notes);
    expect(returnStatus.status).toEqual('Aprovado');
  });

  test('Should return a disapproved status', () => {
    const notes = { note1: 4, note2: 5, note3: 3 };
    const returnStatus = ReturnApprovalStatus.execute(notes);
    expect(returnStatus.status).toEqual('Reprovado');
  });

  test('Should return a number less than 7', () => {
    const notes = { note1: 5, note2: 5, note3: 9 };
    const returnStatus = ReturnApprovalStatus.execute(notes);
    expect(returnStatus.average).toBeLessThanOrEqual(7);
  });

  test('Should return a number greater than 7', () => {
    const notes = { note1: 10, note2: 5, note3: 9 };
    const returnStatus = ReturnApprovalStatus.execute(notes);
    expect(returnStatus.average).toBeGreaterThanOrEqual(7);
  });
});
