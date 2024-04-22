import fs from 'fs';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

fs.rm(
  path.join(__dirname, '../types'),
  { force: true, recursive: true },
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Type directory cleaned.');
      exec('tsc && vite build');
    }
  }
);
