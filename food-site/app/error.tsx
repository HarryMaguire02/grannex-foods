'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] bg-white flex items-center justify-center py-6">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-primary/80 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        {error.digest && (
          <p className="text-sm text-gray-500 mb-4">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-green-medium transition-colors"
          >
            Try Again
          </button>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="inline-block bg-secondary text-primary px-8 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
