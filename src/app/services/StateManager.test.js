import StateManager, { createStateByDays } from './StateManager';

describe('StateManager service tests', () => {
  const initialState = { status: 'testing' };
  let stateManager;

  beforeAll(() => {
    stateManager = StateManager({ status: 'testing' });
  });

  it('should initialize without crashing', () => {
    expect(stateManager).toBeTruthy();
  });

  it('should initialize without crashing if you not pass initial state', () => {
    expect(StateManager()).toBeTruthy();
  });

  it('should get the state', () => {
    expect(stateManager.getState()).toEqual(initialState);
  });

  it('should set the state', () => {
    stateManager.setState({ status: 'adding' });
    expect(stateManager.getState().status).toEqual('adding');
  });

  it('should fire subscribe if state change', () => {
    const change = jest.fn();
    stateManager.subscribe(() => {
      change();
    });
    stateManager.setState({ status: 'changing' });
    expect(change).toHaveBeenCalled();
  });

  it('should not fire subscribe if state change', () => {
    const change = jest.fn();
    const subscription = stateManager.subscribe(() => {
      change();
    });
    subscription.remove();
    stateManager.setState({ status: 'changing' });
    expect(change).not.toHaveBeenCalled();
  });

  it('should return a state object', () => {
    expect(createStateByDays([1, 2, 3, 4])).toEqual([
      { label: 'Amanhã', value: 'R$ 1,00' },
      { label: 'Em 15 dias', value: 'R$ 2,00' },
      { label: 'Em 30 dias', value: 'R$ 3,00' },
      { label: 'Em 90 dias', value: 'R$ 4,00' },
    ]);
  });

  it('should return a state object if are missing values', () => {
    expect(createStateByDays([1, 2, 3])).toEqual([
      { label: 'Amanhã', value: 'R$ 1,00' },
      { label: 'Em 15 dias', value: 'R$ 2,00' },
      { label: 'Em 30 dias', value: 'R$ 3,00' },
      { label: 'Em 90 dias', value: 'R$ 0,00' },
    ]);
  });

  it('should not let create properties', () => {
    expect(() => {
      stateManager.state = 'creating';
    }).toThrow();
  });
});
