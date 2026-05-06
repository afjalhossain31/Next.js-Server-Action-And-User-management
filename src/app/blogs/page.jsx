// Data Loading in Next.js: Server components can fetch data directly.
// This is SSR (Server-Side Rendering), where data is fetched on the server before sending HTML to client.
// CSR (Client-Side Rendering) would use 'use client' and fetch in useEffect.
// Hydration: After SSR, React hydrates the static HTML with interactivity on the client.

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Image Optimization in Next.js: Use <Image> component for automatic optimization, lazy loading, and responsive images.
// It optimizes images on-demand, serves in modern formats, and prevents layout shift.
// External images require configuration in next.config.js for security.

export default async function BlogsPage() {
    // Data Fetching: Fetch data from API route. In development, use full URL.
    const res = await fetch('http://localhost:3001/api/food');
    const foods = await res.json();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Food Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foods.map((food) => (
                    <div key={food.id} className="card bg-base-100 shadow-xl">
                        {/* Image Optimization: Next.js Image component handles optimization */}
                        <figure>
                            <Image
                                src={food.image}
                                alt={food.name}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                                priority={food.id === 1} // Priority loading for first image
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{food.name}</h2>
                            <p>{food.description}</p>
                            <p className="text-lg font-semibold">${food.price}</p>
                            {/* Dynamic Link: Create dynamic links to display food details */}
                            <div className="card-actions justify-end">
                                <Link href={`/blogs/${food.id}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}