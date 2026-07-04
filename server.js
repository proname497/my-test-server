const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Мой тестовый сервер работает!");
});
server.listen(3000, () => console.log("Сервер на порту 3000"));
