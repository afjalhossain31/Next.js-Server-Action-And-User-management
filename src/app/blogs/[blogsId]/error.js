// Handling Error: error.js provides error boundaries for routes.
// This catches errors in the route and shows a fallback UI.

'use client';

export default function Error({ error, reset }) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-2xl font-bold text-red-500">Something went wrong!</h1>
            <p className="text-gray-600">{error.message}</p>
            <button onClick={reset} className="btn btn-primary mt-4">
                Try Again
            </button>
        </div>
    );
}