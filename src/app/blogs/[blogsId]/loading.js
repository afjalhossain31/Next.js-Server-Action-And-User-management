// Loading: Next.js provides loading.js for route-specific loading UI.
// This shows a loading spinner while data is being fetched.

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="loading loading-spinner loading-lg"></div>
        </div>
    );
}