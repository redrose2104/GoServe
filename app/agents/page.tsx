'use client'
import { useRouter } from 'next/navigation';

export default function Login() {

    const router = useRouter();

    return (
        <div className="flex flex-col justify-between h-screen max-w-md bg-white border border-gray-300 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
                <img
                    src="./icon.png"
                    alt="Logo"
                    className="h-6"
                />
                <span className="text-sm text-gray-500">Beta</span>
            </div>

            {/* Image Section */}
            <div className="flex justify-center p-6">
                <img
                    src="/home.png"
                    alt="Illustration"
                    className="w-full max-h-40 object-contain"
                />
            </div>

            {/* Content */}
            <div className="px-4 text-center">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                    Hi, Agent Partner! Ready to Work?
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                    Let&apos;s login to start receiving bids!
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center mb-6">
                <button className="w-3/4 px-4 py-2 mb-4 text-white bg-green-500 rounded-lg hover:bg-green-600" onClick={() => router.push('/agents/dashboard')}>
                    LOG IN
                </button>
                <button className="w-3/4 px-4 py-2 text-green-500 border border-green-500 rounded-lg hover:bg-green-50">
                    Register
                </button>
            </div>

            {/* Footer */}
            <div className="py-4 text-center text-xs text-gray-400">
                All rights reserved
            </div>
        </div>
    );
}
