const http = require("http");
const fs = require("fs");
const path = require("path");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf"
};

http.createServer((request, response) => {
  const requestPath = decodeURIComponent(request.url.split("?")[0]);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const candidatePath = path.normalize(path.join(__dirname, relativePath));

  if (candidatePath !== __dirname && !candidatePath.startsWith(__dirname + path.sep)) {
    response.writeHead(403);
    return response.end("Forbidden");
  }

  const filePath = path.extname(candidatePath) ? candidatePath : path.join(candidatePath, "index.html");

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      return response.end("Not found");
    }
    response.writeHead(200, {
      "Content-Type": mime[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(data);
  });
}).listen(4173, "0.0.0.0", () => console.log("Save the date server running on port 4173"));
