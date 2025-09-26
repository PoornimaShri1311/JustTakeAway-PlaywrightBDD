// clean-artifacts.js
// Script to clean up old Playwright artifacts (videos, traces, screenshots)
// Usage: node clean-artifacts.js [--days=N]

const fs = require('fs');
const path = require('path');

const ARTIFACT_DIRS = ['videos', 'traces', 'screenshots'];
const DEFAULT_DAYS = 7;

function getFilesOlderThan(dir, days) {
  if (!fs.existsSync(dir)) return [];
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return fs.readdirSync(dir)
    .map(f => path.join(dir, f))
    .filter(f => fs.statSync(f).isFile() && fs.statSync(f).mtimeMs < cutoff);
}

function cleanArtifacts(days = DEFAULT_DAYS) {
  ARTIFACT_DIRS.forEach(dir => {
    const files = getFilesOlderThan(dir, days);
    files.forEach(f => {
      try {
        fs.unlinkSync(f);
        console.log(`Deleted: ${f}`);
      } catch (err) {
        console.warn(`Failed to delete ${f}: ${err.message}`);
      }
    });
    if (files.length > 0) {
      console.log(`Cleaned ${files.length} files from ${dir}`);
    }
  });
}

// Parse --days=N argument
const daysArg = process.argv.find(arg => arg.startsWith('--days='));
const days = daysArg ? parseInt(daysArg.split('=')[1], 10) : DEFAULT_DAYS;

cleanArtifacts(days);
