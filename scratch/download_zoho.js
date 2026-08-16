const fs = require('fs');
const https = require('https');

const fileId = 'xaatz7324e3b82d92407eb74bef5144b5f24e';

// Common Zoho WorkDrive public download URLs to try
const urls = [
  `https://workdrive.zohoexternal.in/api/v1/stream/download/${fileId}`,
  `https://workdrive.zohoexternal.in/external/file/${fileId}/download`,
  `https://workdrive.zohoexternal.in/download/${fileId}`,
  `https://workdrive.zohoexternal.in/file/download/${fileId}`
];

function downloadUrl(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      console.log(`URL: ${url} -> Status: ${res.statusCode}`);
      if (res.statusCode === 302 || res.statusCode === 301) {
        console.log(`Redirecting to: ${res.headers.location}`);
        return downloadUrl(res.headers.location, outputPath).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(outputPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded to ${outputPath}`);
          resolve(true);
        });
      } else {
        resolve(false);
      }
    }).on('error', reject);
  });
}

async function run() {
  for (const url of urls) {
    const success = await downloadUrl(url, 'd:/Institute_Project/public/glb/logo_zoho.glb');
    if (success) {
      console.log('Successfully downloaded GLB model!');
      break;
    }
  }
}

run();
