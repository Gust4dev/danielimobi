import { useState, useEffect } from 'react';

/**
 * Centralized mobile performance configuration.
 * Use this to conditionally disable expensive features on mobile.
 */
export const MOBILE_PERF_CONFIG = {
    /** Disable all Framer Motion animations */
    disableAnimations: true,
    /** Disable backdrop-blur and filter blur effects */
    disableBlur: true,
    /** Disable parallax/scroll-based animations */
    disableParallax: true,
    /** Use simpler shadows (shadow-sm instead of shadow-2xl) */
    reduceShadows: true,
    /** Maximum number of motion.divs to allow in a single component */
    maxMotionDivs: 2,
} as const;

/**
 * Hook to detect if the current device is mobile based on viewport width.
 * Reduces animations and heavy computations on mobile for better performance.
 * 
 * @param breakpoint - Width threshold for mobile detection (default: 768)
 * @returns boolean - true if viewport width is less than breakpoint
 */
export function useIsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        // SSR safe: check if window exists
        if (typeof window === 'undefined') return false;
        return window.innerWidth < breakpoint;
    });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Use matchMedia for better performance than resize event
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', checkMobile);
        } else {
            // Fallback for older browsers
            window.addEventListener('resize', checkMobile);
        }

        // Initial check
        checkMobile();

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', checkMobile);
            } else {
                window.removeEventListener('resize', checkMobile);
            }
        };
    }, [breakpoint]);

    return isMobile;
}

/**
 * Hook to detect if user prefers reduced motion.
 * Respects user accessibility settings.
 */
export function usePrefersReducedMotion(): boolean {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handler = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handler);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handler);
            }
        };
    }, []);

    return prefersReducedMotion;
}
