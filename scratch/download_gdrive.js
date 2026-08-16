const fs = require('fs');
const https = require('https');

const fileId = '1WXA468KXhivdZq01BMOuwtp2AqgD3zXF';
const url = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`;

console.log(`Downloading GLB from Google Drive (${fileId})...`);

function fetchFile(targetUrl) {
  https.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      console.log(`Redirecting to: ${res.headers.location}`);
      return fetchFile(res.headers.location);
    }
    if (res.statusCode === 200) {
      const file = fs.createWriteStream('d:/Institute_Project/public/glb/logo.glb');
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        const size = fs.statSync('d:/Institute_Project/public/glb/logo.glb').size;
        console.log(`Successfully downloaded GLB model! File size: ${size} bytes`);
      });
    } else {
      console.error(`Failed with HTTP status code: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error('Error downloading:', err.message);
  });
}

fetchFile(url);
