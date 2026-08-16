import urllib.request
import re

file_id = '1WXA468KXhivdZq01BMOuwtp2AqgD3zXF'
url = f'https://drive.google.com/uc?export=download&id={file_id}'

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        content = response.read()
        
        # Check if Google Drive sent a confirmation page
        content_str = content.decode('utf-8', errors='ignore')
        confirm_match = re.search(r'confirm=([0-9a-zA-Z_]+)', content_str)
        if confirm_match:
            confirm_code = confirm_match.group(1)
            confirm_url = f'https://drive.google.com/uc?export=download&confirm={confirm_code}&id={file_id}'
            print(f'Downloading with confirmation code: {confirm_code}')
            req2 = urllib.request.Request(confirm_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2) as resp2:
                content = resp2.read()

        with open('d:/Institute_Project/public/glb/logo.glb', 'wb') as f:
            f.write(content)
        print(f'Downloaded {len(content)} bytes successfully to public/glb/logo.glb')
except Exception as e:
    print(f'Error: {e}')
