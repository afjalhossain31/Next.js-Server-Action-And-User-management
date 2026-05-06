// Dynamic API Routes: [id] allows dynamic parameters in API routes.
// This demonstrates Next.js ability to handle dynamic server-side endpoints.
// In Next.js 15+, params is a Promise and must be awaited.

const foodData = [
    { id: 1, name: "Pizza", description: "Delicious cheese pizza", image: "https://picsum.photos/400/300?random=1", price: 10 },
    { id: 2, name: "Burger", description: "Juicy beef burger", image: "https://picsum.photos/400/300?random=2", price: 8 },
    { id: 3, name: "Pasta", description: "Creamy Alfredo pasta", image: "https://picsum.photos/400/300?random=3", price: 12 },
];

export async function GET(request, { params }) {
    const { id } = await params;
    const food = foodData.find(f => f.id === parseInt(id));
    if (!food) {
        return new Response(JSON.stringify({ error: 'Food not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(food), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}