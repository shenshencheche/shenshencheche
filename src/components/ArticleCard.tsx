import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <Link to={`/article/${article.id}`}>
          <h2 className="text-xl font-bold text-blue-600 hover:text-blue-800 mb-2">
            {article.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{article.summary}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {article.categories.map(cat => (
              <span 
                key={cat} 
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {cat}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">{article.publishDate}</span>
        </div>
      </div>
    </div>
  );
}