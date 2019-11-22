import StateManager from '@app/services/StateManager';
import Form from './Form';

describe('Form component tests', () => {
  it('should renders without crashing', () => {
    const stateManager = new StateManager([
      { label: 'Label 1', value: '1,00' },
      { label: 'Label 2', value: '2,00' },
    ]);
    const form = Form(stateManager);
    expect(form).toBeTruthy();
  });
});
