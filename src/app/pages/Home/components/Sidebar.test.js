import Sidebar from './Sidebar';

describe('Form component tests', () => {
  it('should renders without crashing', () => {
    const sidebar = Sidebar();
    expect(sidebar).toBeTruthy();
  });
});
