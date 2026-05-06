

// Dynamic Routes in Next.js: [blogsId] is a dynamic route segment.
// Dynamic Routing: Allows pages to be generated based on URL parameters.
// Route-specific Data Load: Fetch data based on the id parameter.

import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// SEO Metadata: Use metadata export for dynamic SEO.
// This sets title and description based on the food item.
// In Next.js 15+, params is a Promise and must be awaited.
export async function generateMetadata({ params }) {
    const { blogsId } = await params;
    const res = await fetch(`http://localhost:3001/api/food/${blogsId}`);
    if (!res.ok) return { title: 'Food Not Found' };
    const food = await res.json();
    return {
        title: food.name,
        description: food.description,
    };
}

export default async function BlogsDetailsPage({ params }) {
    const { blogsId } = await params;
    const res = await fetch(`http://localhost:3001/api/food/${blogsId}`);
    if (!res.ok) {
        notFound();
    }
    const food = await res.json();

    return (
        <div className="container mx-auto p-4">
            <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
                <figure>
                    {/* Image Optimization: Larger image for details page with different dimensions */}
                    <Image
                        src={food.image}
                        alt={food.name}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                        priority // Priority loading for detail page
                    />
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-3xl">{food.name}</h1>
                    <p className="text-lg">{food.description}</p>
                    <p className="text-xl font-bold text-primary">${food.price}</p>
                </div>
            </div>
        </div>
    );
}