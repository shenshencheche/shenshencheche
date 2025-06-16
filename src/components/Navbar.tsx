import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
            技术博客
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">首页</Link>
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors flex items-center">
                分类 <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    to={`/?category=${category.id}`}
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* 移动端下拉菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <Link to="/" className="block py-2 hover:bg-blue-500 px-2 rounded">首页</Link>
            <div className="py-2">
              <div className="font-medium px-2">分类</div>
              <div className="pl-4">
                {categories.map(category => (
                  <Link 
                    key={category.id}
                    to={`/?category=${category.id}`}
                    className="block py-1 hover:bg-blue-500 px-2 rounded"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}