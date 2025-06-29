import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h1>Hello Node!!!!</h1>\n");

  res.end();
});

server.listen(3000, () => {
  console.log("Serveur is run on http://localhost:3000/");
});
