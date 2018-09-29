var http = require('http');
url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let paths = url.parse(req.url, true).pathname.split('/');
  paths.splice(0, 1);
  if (paths[0] === 'name' && paths[1]) {
    let obj = new Object();
    obj.hello = paths[1];
    res.write(JSON.stringify(obj));
  } else {
    res.write("Enter your name after the path 'name' to get a JSON greeting <br>");
    res.write("Example http://localhost:3333/name/John");
  }
  // The path could've been obtained using only the req, but to remove unwanted extra content of the path, I used url.
  res.end();
}).listen(3333);
console.log("Server running at http://localhost:3333/");