// Loading Data Using Client Components: This is a Client Component ('use client').
// It fetches data on the client-side using useEffect.
// Contrast with Server Components that fetch on server.

'use client';

import { useState, useEffect } from 'react';

export default function ClientComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Data Fetching: Fetch data on client after component mounts.
        fetch('/api/food')
            .then(res => res.json())
            .then(setData);
    }, []);

    if (!data) return <p>Loading client data...</p>;

    return (
        <div>
            <h2>Client-Side Fetched Foods:</h2>
            <ul>
                {data.map(food => (
                    <li key={food.id}>{food.name} - ${food.price}</li>
                ))}
            </ul>
        </div>
    );
}