import App from './App';

it('should renders without crashing', () => {
  const app = App();
  expect(app).toBeTruthy();
});
