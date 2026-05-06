import React from 'react';

const aboutPage = () => {
    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-primary mb-4">About Us</h1>
                    <p className="text-xl text-base-content/70">Learn more about our backend and database integration expertise</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-secondary">Our Mission</h2>
                            <p className="text-base-content/80">
                                We specialize in building robust backend systems and seamless database integrations
                                that power modern web applications. Our goal is to create scalable, secure, and
                                efficient solutions that drive business success.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl text-secondary">Our Expertise</h2>
                            <p className="text-base-content/80">
                                With years of experience in full-stack development, we excel in:
                            </p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-base-content/80">
                                <li>Database design and optimization</li>
                                <li>API development and integration</li>
                                <li>Cloud infrastructure setup</li>
                                <li>Performance monitoring and scaling</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="stats stats-vertical lg:stats-horizontal shadow w-full mb-8">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Projects</div>
                            <div className="stat-value text-primary">50+</div>
                            <div className="stat-desc">Completed successfully</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Technologies</div>
                            <div className="stat-value text-secondary">15+</div>
                            <div className="stat-desc">Modern tech stack</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Happy Clients</div>
                            <div className="stat-value text-accent">99%</div>
                            <div className="stat-desc">Satisfaction rate</div>
                        </div>
                    </div>

                    <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content">
                        <div className="card-body text-center">
                            <h2 className="card-title text-3xl justify-center mb-4">Ready to Get Started?</h2>
                            <div className="card-actions justify-center">
                                <button className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutPage;