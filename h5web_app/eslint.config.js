import { createConfig, detectOpts } from '@esrf/eslint-config';
import { globalIgnores } from 'eslint/config';
import { defineConfig } from 'vite';

const opts = detectOpts(import.meta.dirname);

const config = defineConfig([globalIgnores(['dist/']), ...createConfig(opts)]);

export default config;
