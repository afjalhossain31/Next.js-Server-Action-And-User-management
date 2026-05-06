// Next.js API Routes: Allow creating server-side endpoints without a separate server.
// This simulates data fetching, demonstrating Next.js full-stack capabilities.
// In real apps, this could connect to external APIs or databases.

const foodData = [
    { id: 1, name: "Pizza", description: "Delicious cheese pizza", image: "https://picsum.photos/400/300?random=1", price: 10 },
    { id: 2, name: "Burger", description: "Juicy beef burger", image: "https://picsum.photos/400/300?random=2", price: 8 },
    { id: 3, name: "Pasta", description: "Creamy Alfredo pasta", image: "https://picsum.photos/400/300?random=3", price: 12 },
];

export async function GET(request) {
    // Simulate data retrieval
    return new Response(JSON.stringify(foodData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}