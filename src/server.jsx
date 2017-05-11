import express from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Layout from './layout';
import Page from './page';

const app = express();

app.get('*', (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Page />
    </StaticRouter>,
  );

  res.setHeader('Content-Type', 'text/html');

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  }

  res.write(
    renderToStaticMarkup(
      <Layout
        title="App"
        content={html}
      />,
    ),
  );
  res.end();
});

const port = 8080;
app.listen(port);
