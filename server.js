const http = require("http");

const server = http.createServer((req, res) => {
  // Страница для WebApp
  if (req.url === "/" || req.url === "/webapp") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Тестовый сервер</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0d1117;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .card {
      background: #161b22;
      padding: 40px;
      border-radius: 16px;
      text-align: center;
      border: 1px solid #30363d;
    }
    h1 { color: #58a6ff; }
    .status { color: #3fb950; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 Мой тестовый сервер</h1>
    <p class="status">✅ Работает</p>
    <p>Сервер: <span id="host">${req.headers.host}</span></p>
    <p>Время: <span id="time">${new Date().toLocaleString()}</span></p>
    <button onclick="sendMessage()" style="background:#238636;color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;">Отправить привет боту</button>
  </div>
  <script>
    function sendMessage() {
      if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData("Привет с сервера!");
        Telegram.WebApp.showAlert("Сообщение отправлено!");
      } else {
        alert("Открой через Telegram");
      }
    }
  </script>
</body>
</html>
    `);
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", message: "Тестовый сервер работает" }));
  }
});

server.listen(3000, () => {
  console.log("✅ Сервер запущен на порту 3000");
});
