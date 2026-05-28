const fs = require('fs');
const path = require('path');

const excludeDirs = ['node_modules', '.next', '.git'];
const includeExts = ['.ts', '.tsx', '.md', '.json', '.js', '.mjs', '.html'];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        processDir(fullPath);
      }
    } else {
      const ext = path.extname(fullPath);
      if (includeExts.includes(ext) || file === 'next.config.ts') {
        let content = fs.readFileSync(fullPath, 'utf8');
        let originalContent = content;

        // Mask the email so it doesn't get modified
        content = content.replace(/gradviseofficial@gmail\.com/gi, '___TEMP_EMAIL___');
        
        // Handle domains first
        content = content.replace(/gradvise\.com/g, 'plateio.in');
        content = content.replace(/gradvise\.in/g, 'plateio.in'); 
        
        // Handle Brand names
        content = content.replace(/Gradvise/g, 'Plateio');
        content = content.replace(/gradvise/g, 'plateio');
        content = content.replace(/GRADVISE/g, 'PLATEIO');
        
        // Unmask the email
        content = content.replace(/___TEMP_EMAIL___/g, 'gradviseofficial@gmail.com');

        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log('Updated:', fullPath);
        }
      }
    }
  }
}

processDir(process.cwd());
console.log('Done!');
