"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AccountError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Account Error]", error);
  }, [error]);

  return (
    <div className="min-h-[82vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-xl font-semibold mb-3">Account page failed to load</h2>
      <p className="text-gray-500 text-sm mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800"
        >
          Try again
        </button>
        <Link
          href="/login"
          className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50"
        >
          Go to login
        </Link>
      </div>
    </div>
  );
}
