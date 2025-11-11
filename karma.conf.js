import { defineConfig } from 'karma';

export default defineConfig({
  basePath: '',
  frameworks: ['jasmine', 'vite'],
  files: ['src/**/*.spec.{js,jsx,ts,tsx}'],
  preprocessors: {
    '**/*.{js,jsx,ts,tsx}': ['vite']
  },
  vite: {
    logLevel: 'error',
  },
  reporters: ['progress'],
  browsers: ['Chrome'],
  singleRun: false,
  concurrency: Infinity,
});
