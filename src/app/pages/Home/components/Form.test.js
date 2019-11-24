import { createState } from '@app/helpers';
import StateManager from '@app/services/StateManager';
import Form from './Form';

describe('Form component tests', () => {
  it('should renders without crashing', () => {
    const stateManager = new StateManager(createState([0, 0, 0, 0]));
    expect(Form(stateManager)).toBeTruthy();
  });

  it('should not renders without StateManager', () => {
    expect(() => {
      Form();
    }).toThrow('missing state manager');
  });
});
