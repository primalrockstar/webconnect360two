import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center justify-center gap-8 text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          WebConnect360
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Educational platforms for EMT and Paramedic training
        </p>
        <Link
          href="/platforms"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View Platforms
        </Link>
      </main>
    </div>
  );
}
