'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

function safeLocalStorage(key: string): string | null {
    try { return localStorage.getItem(key); } catch { return null; }
}
function safeLocalStorageSet(key: string, value: string): void {
    try { localStorage.setItem(key, value); } catch { }
}

// Pages that skip age verification
const AUTH_PATHS = ['/login', '/signup', '/forgot-password', '/reset-password'];

export default function AgeVerification() {
    const pathname = usePathname();
    const [isVerified, setIsVerified] = useState<boolean | null>(null);
    const [showNotOldEnough, setShowNotOldEnough] = useState(false);

    useEffect(() => {
        // Skip on auth pages
        if (AUTH_PATHS.includes(pathname)) return;

        // Skip for search engine crawlers and automated testing (Lighthouse, PageSpeed, Googlebot)
        // This allows Google to crawl and measure real page content instead of the modal
        const ua = navigator.userAgent || '';
        const isBot = (
            navigator.webdriver === true || // Headless Chrome / Lighthouse
            /bot|crawler|spider|googlebot|bingbot|yandexbot|pagespeed|lighthouse|chrome-lighthouse|adsbot|apis-google|mediapartners/i.test(ua)
        );
        if (isBot) {
            setIsVerified(true); // treat bots as verified - they can't interact with the modal anyway
            return;
        }

        const verified = safeLocalStorage('ageVerified') === 'true';
        setIsVerified(verified);

        if (!verified) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [pathname]);

    // Don't show on auth pages
    if (AUTH_PATHS.includes(pathname)) return null;
    // Don't show while loading or if verified
    if (isVerified === null || isVerified) return null;

    const handleConfirm = (confirmed: boolean) => {
        if (confirmed) {
            safeLocalStorageSet('ageVerified', 'true');
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
