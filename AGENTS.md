# AstraScheduleDocs 文档站点知识库

## 概述

Rspress + React 文档站点，包含快速开始、用户手册、运维手册、开发指南和常见问题。

## 项目结构

```
AstraScheduleDocs/
├── index.html              # 入口 HTML
├── package.json            # 依赖配置
├── rspress.config.ts       # Rspress 核心配置
├── tsconfig.json           # TypeScript 配置
├── bun.lock                # Bun 包管理锁文件
└── docs/                   # 文档根目录
    ├── _nav.json           # 顶部导航配置
    ├── index.md            # 首页（hero + features）
    ├── thanks.md           # 致谢页面
    ├── guide/              # 快速开始
    │   ├── index.md
    │   ├── lowcost/        # 极低成本外网部署
    │   ├── intranet/       # 学校内网部署
    │   └── production/     # 外网高并发部署
    ├── manual/             # 用户手册
    │   ├── index.md
    │   ├── schedule.md     # 课表配置
    │   ├── countdown.md    # 倒计时
    │   ├── weather.md      # 天气
    │   └── ...
    ├── administrator/      # 运维手册
    │   ├── index.md
    │   ├── waf-cdn.md      # WAF/CDN
    │   ├── https.md        # HTTPS
    │   └── ...
    ├── dev/                # 开发指南
    │   ├── index.md
    │   ├── architecture.md # 系统架构
    │   ├── api-web.md      # Web API
    │   ├── backend-go.md   # Go 后端
    │   └── docs-contrib.md # 文档贡献
    ├── faq/                # 常见问题
    │   └── index.md
    └── public/             # 静态资源（当前为空）
```

## 查找位置

| 任务 | 位置 | 说明 |
|------|------|------|
| 部署文档 | `docs/guide/` | 三套部署方案 |
| 用户手册 | `docs/manual/` | 功能文档 |
| 运维手册 | `docs/administrator/` | 运维文档 |
| 开发指南 | `docs/dev/` | 架构、API、后端 |
| 常见问题 | `docs/faq/` | Q&A |
| 导航配置 | `docs/_nav.json` | 顶部导航 |
| 侧边栏配置 | `docs/*/_meta.json` | 各章节侧边栏 |

## 约定

### 编码规范
- **语言**：Markdown + MDX
- **TypeScript**：严格模式，未使用变量/参数报错
- **JSX**：react-jsx 转换
- **模块解析**：bundler

### 文档结构
- 每个章节有 `index.md` 作为入口
- 使用 `_meta.json` 配置侧边栏
- 使用 `_nav.json` 配置顶部导航

### 版本标记
- **新建文档**：开头添加 DANGER 标识（全文未审核）
- **修改已有文档**：开头添加 WARNING 标识（部分内容未审核）

**DANGER 格式（新建文档）**：
```markdown
> [!DANGER]
>
> 本页由 AI 工具参考代码编写，尚未经过人工审核，内容仅供参考。如果无法解决问题或需要协助部署，可邮箱联系：kuohu233@qq.com
```

**WARNING 格式（修改已有文档）**：

```markdown
> [!WARNING]
>
> 本页由 AI 工具参考代码编写，部分内容未经过人工审核，内容仅供参考。如果无法解决问题或需要协助部署，可邮箱联系：kuohu233@qq.com
```

## 反模式

### 内容相关
- **禁止** 添加未审核的技术细节（需人工验证）
- **禁止** 修改 `rspress.config.ts` 的 `llms: true` 配置

### 代码相关
- **禁止** 使用 `any` 类型（TypeScript 严格模式）
- **禁止** 未使用的变量或参数
- **禁止** 提交 `node_modules/` 目录

### 构建相关
- **禁止** 提交 `dist/` 目录（构建产物）
- **禁止** 修改 `bun.lock`（依赖锁文件）

## 独特风格

### 三套部署方案
- **极低成本外网部署**：适合预算有限的学校
- **学校内网部署**：适合有内网环境的学校
- **外网高并发部署**：适合大规模部署

### AI 友好
- 启用 `llms: true` 配置
- 支持 AI 工具直接读取文档
- 提供 `llms.txt` 文件

### 语言风格
- 使用简洁的风格写作
- 避免冗长的解释
- 直接提供操作步骤

## 命令

```bash
# 开发服务器
bun run dev

# 生产构建
bun run build

# 预览构建结果
bun run preview
```

## 注意事项

### 开发环境
- 需要 Bun 包管理器
- 使用 Rspress 开发服务器（支持热重载）
- TypeScript 严格模式

### 文档编写
- 使用 Markdown 语法
- 支持 MDX（可嵌入 React 组件）
- 使用 GFM 扩展（表格、任务列表等）

### 部署
- 构建产物：`dist/` 目录
- 支持静态托管（如 GitHub Pages、Netlify）
- 无需后端服务

### 搜索
- 使用 FlexSearch（Rspress 内置）
- 支持全文搜索
- 无需额外配置

### 图片
- 使用阿里云 OSS 外链
- 无本地静态资源
- 支持点击放大（medium-zoom）

### 语法高亮
- 使用 Shiki（Rspress 内置）
- 支持多种语言
- 无需额外配置
