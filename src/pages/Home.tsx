import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';
import { categories } from '@/data/categories';

export default function Home() {
  const [searchParams] = useSearchParams();
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const currentCategory = searchParams.get('category');

  useEffect(() => {
    if (currentCategory) {
      setFilteredArticles(
        articles.filter(article => 
          article.categories.includes(currentCategory)
        )
      );
    } else {
      setFilteredArticles(articles);
    }
  }, [currentCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 container mx-auto px-4 py-8">
        {/* 桌面端分类菜单 */}
        <aside className="hidden md:block w-64 pr-8">
          <div className="sticky top-24">
            <h2 className="text-lg font-bold mb-4 text-gray-800">分类</h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className={`block px-4 py-2 rounded ${!currentCategory ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                >
                  全部文章
                </a>
              </li>
              {categories.map(category => (
                <li key={category.id}>
                  <a 
                    href={`/?category=${category.id}`}
                    className={`block px-4 py-2 rounded ${currentCategory === category.id ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* 文章列表 */}
        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            {currentCategory 
              ? `${categories.find(c => c.id === currentCategory)?.name || currentCategory} 相关文章`
              : '最新文章'}
          </h1>
          
          <div className="space-y-6">
            {filteredArticles
              .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
              .map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
          </div>
        </main>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 技术博客 - 保留所有权利</p>
        </div>
      </footer>
    </div>
  );
}