require('dotenv').config();

const http = require('http');

const fs = require('fs');

const path = require('path');


const servidor = http.createServer((req, res) => {
  if (req.url === '/') {
    // arquivo HTML
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {

      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      }
      
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });

  }

  else if (req.url === '/env') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
      token: process.env.TOKEN,
      base: process.env.BASEID,
      table: process.env.TABLEID,
      url: `https://api.airtable.com/v0/${process.env.BASEID}/${process.env.TABLEID}`
    }));
  }

  else if (req.url === '/script.js') {
    // arquivo JavaScript
    fs.readFile(path.join(__dirname, 'script.js'), (err, content) => {

      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } 
      
      else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(content);
    }})
  }

  else if (req.url === '/style.css') {
    // arquivo css
    fs.readFile(path.join(__dirname, 'style.css'), (err, content) => {

      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } 
      
      else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(content);
    }})
  }

  else if (req.url === '/fundo.png') {
    // arquivo fundo.png
    fs.readFile(path.join(__dirname, 'fundo.png'), (err, content) => {

      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      } 
      
      else {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(content);
    }})
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

servidor.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});