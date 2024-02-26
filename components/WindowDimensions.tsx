"use client"
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        setWindowDimensions(getWindowDimensions());
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export function useViewPortDetector() {
    const { height, width } = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(width < 650);
    useEffect(() => {
        setIsMobile(width < 650);
    }, [width]);
    return isMobile;
}
