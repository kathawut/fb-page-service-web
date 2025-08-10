import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

const server = createServer((req, res) => {
  let filePath = join(__dirname, 'dist', req.url === '/' ? 'index.html' : req.url);
  
  // Handle SPA routing - serve index.html for unknown routes
  try {
    const content = readFileSync(filePath);
    const ext = filePath.split('.').pop();
    
    const mimeTypes = {
      'html': 'text/html',
      'css': 'text/css',
      'js': 'application/javascript',
      'json': 'application/json',
      'svg': 'image/svg+xml',
      'ico': 'image/x-icon'
    };
    
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
    res.end(content);
  } catch (error) {
    // Fallback to index.html for SPA routing
    try {
      const indexContent = readFileSync(join(__dirname, 'dist', 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexContent);
    } catch (fallbackError) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - File not found');
    }
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
