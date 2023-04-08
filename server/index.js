import express from 'express';
import react from 'react';
import reactDomServer from 'react-dom/server';
import App from '../src/App.tsx';
const PORT = process.env.PORT || 9000;
const app = express();
app.get('/', (req, res) => {
  const jsx = `
<html lang="en">
  <body>
    <div id="root">${reactDomServer.renderToString(
      react.createElement(App)
    )}</div>
  </body>
</html>
`;
  res.send(jsx);
});
app.use(express.static('dist')); //expressの静的ファイルのルートを指定する。
app.listen(PORT, () => {
  console.log(`Server is running on port 9000`);
});
