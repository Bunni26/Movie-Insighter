'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-6 text-gray-600 text-lg font-medium">Analyzing movie insights...</p>
      <p className="mt-2 text-gray-400 text-sm">Fetching data and processing reviews</p>
    </div>
  );
}

