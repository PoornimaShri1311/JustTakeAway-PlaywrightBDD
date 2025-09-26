import * as fs from 'fs';
import * as path from 'path';

/**
 * Type for environment configuration loaded from test-data.
 */
export type EnvConfig = {
  urls: {
    homePage: string;
    [key: string]: string;
  };
  [key: string]: unknown;
};

/**
 * Loads the environment configuration for the given environment.
 * @param env Optional environment name (defaults to process.env.ENV or 'qa')
 * @returns The environment configuration object
 * @throws If the config file or environment is missing
 */
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

