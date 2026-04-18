# HeZzz's Notes

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/HeZ2z/astro-exam-code?color=%232F3741&style=for-the-badge)

复习笔记与一手资料整理，涵盖课程重点、期末回忆版与零散知识点。

## Features

- [x] 支持 Mermaid 图表与数学公式（LaTeX）
- [x] 响应式布局，深色/浅色模式切换
- [x] 按标签分类筛选
- [x] 归档视图按时间回溯
- [x] 全文搜索
- [x] Sitemap 与 RSS 订阅
- [x] 自动生成文章 OG 图片

## Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**Icons** - [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Linting** - [ESLint](https://eslint.org)  
**Deployment** - [GitHub Pages](https://pages.github.com/)

## Local Development

```bash
# install dependencies
pnpm install

# start dev server
pnpm run dev

# build for production
pnpm run build

# preview production build
pnpm run preview
```

## Project Structure

```
src/
  data/
    blog/           # 笔记与资料，按主题组织子目录
  pages/            # 页面路由
  layouts/          # 页面布局
  components/       # Astro 组件
  styles/           # 全局样式
  utils/            # 工具函数
```

## License

MIT License
