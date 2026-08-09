'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

// Pages that skip age verification
const AUTH_PATHS = ['/login', '/signup', '/forgot-password', '/reset-password'];

// Read age verification status synchronously from cookie
// This runs during useState initialization - no useEffect delay
function readVerifiedCookie(): boolean {
    if (typeof document === 'undefined') return false; // SSR: unverified → modal in initial HTML
    return document.cookie.split(';').some(c => c.trim().startsWith('ageVerified=true'));
}

function setVerifiedCookie() {
    // 1 year expiry, root path, SameSite=Lax
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `ageVerified=true; expires=${expires}; path=/; SameSite=Lax`;
    // Also keep localStorage for backward compat
    try { localStorage.setItem('ageVerified', 'true'); } catch { /* ignore */ }
}

export default function AgeVerification() {
    const pathname = usePathname();

    // Initialize from cookie synchronously - no delay, no useEffect needed for this
    // SSR: returns false → modal renders in initial HTML (LCP = 3s, not 15s)
    // Client hydration for verified users: cookie=true → no modal, no flash
    const [isVerified, setIsVerified] = useState<boolean>(() => readVerifiedCookie());
    const [showNotOldEnough, setShowNotOldEnough] = useState(false);

    useEffect(() => {
        if (isVerified) {
            document.body.style.overflow = '';
        } else if (!AUTH_PATHS.includes(pathname)) {
            document.body.style.overflow = 'hidden';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isVerified, pathname]);

    // Don't show on auth pages
    if (AUTH_PATHS.includes(pathname)) return null;
    // Don't show if verified
    if (isVerified) return null;

    const handleConfirm = (confirmed: boolean) => {
        if (confirmed) {
            setVerifiedCookie();
            setIsVerified(true);
            document.body.style.overflow = '';
        } else {
            setShowNotOldEnough(true);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-8 text-center flex flex-col justify-center items-center font-unbounded">
                <Image src="/images/logo.png" width={180} height={30} alt="GetSmoke" priority />
                <p className="my-4">Are you of legal smoking age?</p>
                <div className="flex flex-col gap-4 justify-center w-full">
                    <Button onClick={() => handleConfirm(true)} variant="primary" className="w-full !bg-green-500 hover:!bg-green-600">
                        Yes, I&apos;m 21 years +
                    </Button>
                    <Button variant="secondary" onClick={() => handleConfirm(false)} className="w-full !bg-red-600 hover:!bg-red-700 !text-white">
                        No, I&apos;m under 21 years age
                    </Button>
                </div>
                {showNotOldEnough && (
                    <p className="text-red-600 mt-4">You are not old enough to view this content.</p>
                )}
            </div>
        </div>
    );
}
