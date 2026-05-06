// Handling Error: not-found.js provides a custom 404 page for the route.
// This shows when a food id is not found.

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold text-red-500">Food Not Found</h1>
            <p className="text-gray-600">The food item you&apos;re looking for doesn&apos;t exist.</p>
        </div>
    );
}