import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { URL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

// CORS proxy for Facebook API
async function proxyRequest(req, res, apiPath) {
  const targetUrl = `https://fb-page-service-azzre.ondigitalocean.app${apiPath}`;
  
  try {
    console.log('Proxying request to:', targetUrl);
    console.log('Headers:', req.headers);
    
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Authorization': req.headers.authorization,
        'Content-Type': req.headers['content-type'] || 'application/json',
        'User-Agent': 'Facebook-Pages-API-Web/1.0'
      }
    });
    
    const data = await response.text();
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    
    res.writeHead(response.status);
    res.end(data);
    
  } catch (error) {
    console.error('Proxy error:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(500);
    res.end(JSON.stringify({ 
      error: 'Proxy error', 
      message: error.message,
      target: targetUrl
    }));
  }
}

const server = createServer(async (req, res) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Handle API proxy requests
  if (req.url.startsWith('/api/')) {
    await proxyRequest(req, res, req.url);
    return;
  }
  
  // Handle static file serving
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
  console.log(`CORS proxy enabled for /api/* routes`);
});
