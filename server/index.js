// HTTPモジュールの読み込み
import http from 'http';
http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('Hello World\n');
  })
  .listen(9000);

//  サーバーにアクセスするための URL を出力
