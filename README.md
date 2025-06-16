# 技术博客项目

这是一个基于React + TypeScript + Vite构建的技术博客项目。

## 本地开发

```bash
pnpm install
pnpm dev
```

## GitHub Pages 部署指南

### 准备工作
1. 在GitHub上创建新仓库
2. 将项目代码推送到仓库的main分支

### 部署步骤
1. 确保项目中的`.github/workflows/deploy.yml`文件存在
2. 修改`vite.config.ts`中的base路径为你的仓库名：
   ```ts
   base: '/your-repo-name/'
   ```
3. 提交并推送代码到main分支

### 配置GitHub Pages
1. 进入仓库Settings > Pages
2. 选择"GitHub Actions"作为源
3. 在Build and deployment部分选择"GitHub Pages"
4. 选择main分支和根目录

### 访问网站
部署完成后，你的网站将可以通过以下URL访问：
`https://your-username.github.io/your-repo-name/`

### 注意事项
- 首次部署可能需要几分钟时间
- 如果使用自定义域名，请确保配置CNAME文件
- 确保所有路由都能正确处理404页面
