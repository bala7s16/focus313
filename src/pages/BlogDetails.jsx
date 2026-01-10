import { useParams, Navigate, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { FaCalendar, FaUser } from 'react-icons/fa';
import '../styles/Blogs.css'; // Reusing shared styles

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === parseInt(id));

    if (!blog) {
        return <Navigate to="/blogs" replace />;
    }

    return (
        <div className="page-container page-padding">
            <div className="container blog-details-container">
                <Link to="/blogs" className="btn btn-outline mb-4">
                    &larr; Back to Blogs
                </Link>

                <article className="blog-full-article">
                    <div className="blog-hero-image" style={{ backgroundImage: `url(${blog.image})` }}></div>

                    <div className="blog-header">
                        <h1 className="blog-details-title">{blog.title}</h1>
                        <div className="blog-meta-details">
                            <span className="meta-item"><FaCalendar /> {blog.date}</span>
                            <span className="meta-item"><FaUser /> {blog.author}</span>
                        </div>
                    </div>

                    <div className="blog-body">
                        {/* Rendering simple markdown-like content with line breaks */}
                        {blog.content.split('\n\n').map((paragraph, index) => {
                            if (paragraph.startsWith('### ')) {
                                return <h3 key={index} className="blog-subheading">{paragraph.replace('### ', '')}</h3>;
                            }
                            if (paragraph.startsWith('- ')) {
                                return <li key={index} className="blog-list-item">{paragraph.replace('- ', '')}</li>;
                            }
                            // Handle simple list rendering if multiple lines start with - 
                            // (Simplistic implementation for this specific content structure)
                            return <p key={index} className="blog-text">{paragraph}</p>;
                        })}
                    </div>

                    <div className="blog-footer-cta">
                        <h3>Ready to achieve your goals?</h3>
                        <p>Join Focus 313 Fitness today and experience the difference.</p>
                        <Link to="/contact" className="btn btn-primary mt-3">Join Now</Link>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetails;
