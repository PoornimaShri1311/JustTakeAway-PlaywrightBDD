import * as fs from 'fs';
import * as path from 'path';

export type EnvConfig = {
  baseUrl: string;
  [key: string]: any;
};

export function getConfig(env: string = 'qa'): EnvConfig {
  const filePath = path.resolve(__dirname, '../test-data/testing-data.json');
  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${filePath}`);
  }

  const rawData = fs.readFileSync(filePath, 'utf-8');
  const allData = JSON.parse(rawData);

  if (!allData[env]) {
    throw new Error(`No configuration found for environment: ${env}`);
  }

  return allData[env];
}

