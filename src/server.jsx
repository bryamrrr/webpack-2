import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();

app.get('/', (req, res) => {
  const html = renderToString(React.DOM.h1(null, 'hola'));

  res.write(html);
  res.end();
});

const port = 8080;
app.listen(port);
console.log(`Listening on port ${port}`);

// function requestHandler(request, response) {
//   const html = renderToString(
//     React.DOM.h1(null, 'hola')
//   );

//   response.write(html);
//   response.end();
// }

