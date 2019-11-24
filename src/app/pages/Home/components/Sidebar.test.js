import { createState } from '@app/helpers';
import StateManager from '@app/services/StateManager';
import Sidebar from './Sidebar';

describe('Form component tests', () => {
  it('should renders without crashing', () => {
    const stateManager = new StateManager(createState([0, 0, 0, 0]));
    expect(Sidebar(stateManager)).toBeTruthy();
  });

  it('should not renders without StateManager', () => {
    expect(() => {
      Sidebar();
    }).toThrow('missing state manager');
  });
});
