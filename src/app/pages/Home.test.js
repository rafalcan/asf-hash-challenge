import Home from './Home';

it('should renders without crashing', () => {
  const home = Home();
  expect(home).toBeTruthy();
});
