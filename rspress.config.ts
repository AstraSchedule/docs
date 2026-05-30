import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'AstraSchedule',
  icon: 'https://image-hk-1.oss-accelerate.aliyuncs.com/icon.png',
  logo: 'https://image-hk-1.oss-accelerate.aliyuncs.com/icon.png',
  logoText: '星程课表 · AstraSchedule',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/AstraSchedule/desktop',
      },
    ],
  },
  llms: true,
});
