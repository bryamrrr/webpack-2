import reducer from'./index';

test('reducer', () => {
  expect(
    reducer()
  ).toMatchSnapshot();
});