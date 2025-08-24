test('html tiene <h1>', () => {
  const fs = require('fs');
  const html = fs.readFileSync('index.html', 'utf8');
  expect(html).toMatch(/<h1>.*<\/h1>/);
});
