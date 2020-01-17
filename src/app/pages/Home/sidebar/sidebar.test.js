import StateManager, { createStateByDays } from '@app/core/state-manager';
import Sidebar from './sidebar';

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
