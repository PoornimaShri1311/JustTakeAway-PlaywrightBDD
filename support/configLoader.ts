import * as fs from 'fs';
import * as path from 'path';

export type EnvConfig = {
  urls: {
    homePage: string;
    [key: string]: string;
  };
  [key: string]: unknown;  // unknown is safer than any
};

export function getConfig(env?: string): EnvConfig {
  const envToUse = env || process.env.ENV || 'qa'; 
  const filePath = path.resolve(__dirname, '../test-data/testingData.json');

  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${filePath}`);
  }

  const rawData = fs.readFileSync(filePath, 'utf-8');
  const allData = JSON.parse(rawData);

  if (!allData.environments || !allData.environments[envToUse]) {
    throw new Error(`No configuration found for environment: ${envToUse}`);
  }

  return allData.environments[envToUse] as EnvConfig;
}

