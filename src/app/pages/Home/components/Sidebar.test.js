import StateManager, { createStateByDays } from '@app/services/StateManager';
import Sidebar from './Sidebar';

describe('Sidebar component tests', () => {
  it('should renders without crashing', () => {
    const stateManager = StateManager({
      items: createStateByDays([0, 0, 0, 0]),
    });
    expect(Sidebar(stateManager)).toBeTruthy();
  });

  it('should not renders without StateManager', () => {
    expect(() => {
      Sidebar();
    }).toThrow('missing state manager');
  });
});
