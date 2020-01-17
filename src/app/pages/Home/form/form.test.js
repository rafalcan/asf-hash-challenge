import StateManager, { createStateByDays } from '@app/core/state-manager';
import Form from './form';

describe('Form component tests', () => {
  it('should renders without crashing', () => {
    const stateManager = StateManager({
      items: createStateByDays([0, 0, 0, 0]),
    });
    expect(Form(stateManager)).toBeTruthy();
  });

  it('should not renders without StateManager', () => {
    expect(() => {
      Form();
    }).toThrow('missing state manager');
  });
});
