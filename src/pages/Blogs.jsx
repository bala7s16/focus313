import '../styles/Blogs.css';
import { blogs } from '../data/blogs';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className="page-container page-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h1 className="page-title">Fitness <span className="text-highlight">Blog</span></h1>
                    <p className="page-subtitle">Expert tips, workout guides, and nutritional advice.</p>
                </div>

                <div className="blogs-grid">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="blog-card">
                            <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}>
                                <div className="blog-date">{blog.date}</div>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-excerpt">{blog.excerpt}</p>
                                <div className="blog-meta">
                                    <span className="blog-author">By {blog.author}</span>
                                    <Link to={`/blogs/${blog.id}`} className="read-more">Read More &rarr;</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
