export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishDate: string;
  categories: string[];
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'React Hooks 最佳实践',
    summary: '深入探讨React Hooks的使用模式和常见陷阱',
    content: 'React Hooks 是 React 16.8 引入的新特性，它让函数组件也能使用状态和其他 React 特性。\n\n使用 Hooks 时需要注意以下几点：\n1. 只在最顶层使用 Hook\n2. 只在 React 函数中调用 Hook\n3. 使用自定义 Hook 复用状态逻辑\n\n```\n// 示例代码\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```',
    publishDate: '2025-06-15',
    categories: ['react', 'frontend']
  },
  {
    id: '2',
    title: 'TypeScript类型系统进阶',
    summary: '掌握TypeScript高级类型技巧',
    content: 'TypeScript 的类型系统非常强大，以下是一些高级技巧：\n\n1. 条件类型\n2. 映射类型\n3. 模板字面量类型\n\n```\n// 条件类型示例\ntype IsString<T> = T extends string ? true : false;\n\n// 映射类型示例\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n\n// 模板字面量类型示例\ntype EventName<T extends string> = `${T}Changed`;\n```',
    publishDate: '2025-06-10',
    categories: ['typescript', 'frontend']
  },
  {
    id: '3',
    title: 'Node.js性能优化',
    summary: '提升Node.js应用性能的几种方法',
    content: 'Node.js 性能优化可以从以下几个方面入手：\n\n1. 使用最新版本的 Node.js\n2. 避免同步方法\n3. 使用流处理大文件\n4. 合理使用集群模式\n\n```\n// 使用流的示例\nconst fs = require(\'fs\');\nconst zlib = require(\'zlib\');\n\nfs.createReadStream(\'input.txt\')\n  .pipe(zlib.createGzip())\n  .pipe(fs.createWriteStream(\'input.txt.gz\'));\n\nconsole.log(\'文件压缩完成\');\n```',
    publishDate: '2025-06-05',
    categories: ['nodejs', 'backend']
  }
];