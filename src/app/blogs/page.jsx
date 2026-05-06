import React from 'react';
import Image from 'next/image';

const BlogsPage = () => {


    const blogPosts = [
        {
            id: 1,
            title: "Mastering Database Design: Best Practices for Scalable Applications",
            excerpt: "Learn the fundamental principles of database design that ensure your applications can scale efficiently as your user base grows.",
            content: "Database design is crucial for building scalable applications. This comprehensive guide covers normalization, indexing strategies, and performance optimization techniques that every backend developer should know.",
            author: "Sarah Johnson",
            date: "2024-01-15",
            readTime: "8 min read",
            category: "Database Design",
            tags: ["SQL", "Database", "Scalability", "Performance"],
            image: "https://picsum.photos/600/300?random=1"
        },
        {
            id: 2,
            title: "RESTful API Development: From Concept to Production",
            excerpt: "A complete guide to building robust REST APIs with proper error handling, authentication, and documentation.",
            content: "Building production-ready APIs requires careful planning and implementation. This article explores REST principles, authentication strategies, and best practices for API documentation and testing.",
            author: "Michael Chen",
            date: "2024-01-22",
            readTime: "12 min read",
            category: "API Development",
            tags: ["REST", "API", "Node.js", "Express"],
            image: "https://picsum.photos/600/300?random=2"
        },
        {
            id: 3,
            title: "Database Migration Strategies: Zero Downtime Deployments",
            excerpt: "Implement seamless database migrations without affecting your application's availability or user experience.",
            content: "Database migrations are a critical part of application deployment. Learn how to plan, execute, and rollback migrations safely while maintaining service availability.",
            author: "Emily Rodriguez",
            date: "2024-02-01",
            readTime: "10 min read",
            category: "DevOps",
            tags: ["Migration", "Database", "DevOps", "Deployment"],
            image: "https://picsum.photos/600/300?random=3"
        },
        {
            id: 4,
            title: "Optimizing Database Queries: Performance Tuning Techniques",
            excerpt: "Discover advanced techniques to optimize your database queries and improve application response times significantly.",
            content: "Slow queries can cripple application performance. This guide covers query optimization, indexing strategies, and monitoring tools to keep your database running efficiently.",
            author: "David Kim",
            date: "2024-02-08",
            readTime: "15 min read",
            category: "Performance",
            tags: ["Query Optimization", "Performance", "Indexing", "Monitoring"],

            image: "https://picsum.photos/600/300?random=4"
        }
    ];

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-primary mb-4">Our Blog</h1>
                    <p className="text-xl text-base-content/70">Insights and tutorials on backend development and database integration</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <figure className="px-6 pt-6">
                                <Image src={post.image} alt={post.title} width={600} height={300} className="rounded-xl w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <div className="badge badge-primary badge-outline">{post.category}</div>
                                    <div className="badge badge-secondary badge-outline">{post.readTime}</div>
                                </div>
                                <h2 className="card-title text-xl mb-2 hover:text-primary cursor-pointer">{post.title}</h2>
                                <p className="text-base-content/70 mb-4">{post.excerpt}</p>
                                <div className="flex justify-between items-center text-sm text-base-content/60">
                                    <span>By {post.author}</span>
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-primary btn-sm">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;