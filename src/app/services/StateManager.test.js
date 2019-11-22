import StateManager from './StateManager';

describe('StateManager service tests', () => {
  const initialState = { status: 'testing' };
  let stateManager;

  beforeAll(() => {
    stateManager = new StateManager({ status: 'testing' });
  });

  it('should initialize without crashing', () => {
    expect(stateManager).toBeTruthy();
  });

  it('should get the state', () => {
    expect(stateManager.getState()).toEqual(initialState);
  });

  it('should set the state', () => {
    stateManager.setState({ status: 'adding' });
    expect(stateManager.getState().status).toEqual('adding');
  });

  it('should fire subscribe if state change', (done) => {
    stateManager.subscribe((state) => {
      expect(state.status).toEqual('changing');
      done();
    });
    stateManager.setState({ status: 'changing' });
  });

  it('should not let create properties', () => {
    expect(() => {
      stateManager.state = 'creating';
    }).toThrow();
  });
});
