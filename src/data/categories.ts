export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'frontend', name: '前端开发' },
  { id: 'backend', name: '后端开发' },
  { id: 'react', name: 'React' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'nodejs', name: 'Node.js' }
];