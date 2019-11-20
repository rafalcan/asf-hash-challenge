import Form from './Form';

describe('Form component tests', () => {
  it('should renders without crashing', () => {
    const form = Form();
    expect(form).toBeTruthy();
  });
});
