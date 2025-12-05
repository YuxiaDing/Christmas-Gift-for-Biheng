import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // 仓库路径配置
    base: "/Christmas-Gift-for-Biheng/",

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    // 修复 API Key 识别问题的核心配置
    define: {
      'process.env': {
        GEMINI_API_KEY: JSON.stringify(process.env.GEMINI_API_KEY || env.GEMINI_API_KEY)
      }
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
