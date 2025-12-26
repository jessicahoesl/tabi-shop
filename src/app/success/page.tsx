"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Vielen Dank!</h1>
        <p className="text-gray-600 mb-6">
          Die Zahlung war erfolgreich.
        </p>

        {sessionId && (
          <div className="bg-gray-100 p-3 rounded text-xs text-gray-500 mb-6 break-all">
            Referenz: {sessionId}
          </div>
        )}

        {/* Should validate the session ID here and show the download link */}
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
          <p className="text-sm text-blue-800 font-medium">Download</p>
          <p className="text-xs text-blue-600 mt-1">
            Ihr Tafelbild wird in Kürze per E-Mail gesendet.
          </p>
        </div>

        <Link 
          href="/"
          className="block w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          Zurück zum Shop
        </Link>
      </div>
    </div>
  );
}

// Next.js requires components using useSearchParams to be wrapped in Suspense
export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Laden...</div>}>
      <SuccessContent />
    </Suspense>
  );
}