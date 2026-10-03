const http = require('http'); //

// إنشاء مصفوفة المستخدمين لمسار /api/users
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" }
];

const PORT = 3000; //

// إنشاء خادم HTTP[cite: 2]
const server = http.createServer((req, res) => {
  const url = req.url;

  // التعامل مع المسارات المختلفة[cite: 2]
  if (url === '/' || url === '/home') { //[cite: 2]
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); //[cite: 2]
    res.end('Welcome to the Home Page!'); //[cite: 2]
  } 
  else if (url === '/about') { //[cite: 2]
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); //[cite: 2]
    res.end('About Us'); //[cite: 2]
  } 
  else if (url === '/api/users') { //[cite: 2]
    res.writeHead(200, { 'Content-Type': 'application/json' }); //[cite: 2]
    res.end(JSON.stringify(users)); //[cite: 2]
  } 
  else {
    // أي مسار آخر غير موجود ينتهي بـ 404[cite: 2]
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); //[cite: 2]
    res.end('Page Not Found'); //[cite: 2]
  }
});

// تشغيل الخادم على المنفذ 3000[cite: 2]
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});