import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { articles } from '@/data/articles';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find(article => article.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h1 className="text-xl font-bold mb-4">文章未找到</h1>
            <Link 
              to="/" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              返回首页
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/" 
            className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>返回文章列表
          </Link>
          
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2 text-gray-800">{article.title}</h1>
              <div className="flex items-center mb-6">
                <span className="text-sm text-gray-500">{article.publishDate}</span>
              </div>
              
              <div className="prose max-w-none">
                {article.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                ))}
                
                {article.content.includes('```') && (
                  <div className="my-6">
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-gray-800">
                      <code>{article.content.match(/```([\s\S]*?)```/)?.[1]}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 技术博客 - 保留所有权利</p>
        </div>
      </footer>
    </div>
  );
}
