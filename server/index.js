import express from 'express';
import react from 'react';
import reactDomServer from 'react-dom/server';
import App from '../src/App.tsx';
const PORT = process.env.PORT || 9000;
const app = express();
app.get('/', (req, res) => {
  const app = reactDomServer.renderToString(react.createElement(App));
  const html = `
<html lang="en">
  <head>
    <script src="client.js" async defer></script>
  </head>
  <body>
    <div id="root">${app}</div>
  </body>
</html>
`;
  res.send(html);
});
app.use(express.static('dist'));
app.listen(PORT, () => {
  console.log(`Server is running on port 9000`);
});
