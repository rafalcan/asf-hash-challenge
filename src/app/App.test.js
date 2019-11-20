import App from './App';

describe('App component tests', () => {
  it('should renders without crashing', () => {
    const app = App();
    expect(app).toBeTruthy();
  });
});
