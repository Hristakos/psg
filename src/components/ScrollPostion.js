import React, { useLayoutEffect, useState } from 'react';

export default function useWindowPosition() {
    const [scrollPosition, setPosition] = useState(0);
    const [finished, setFinished] = useState(false)
    useLayoutEffect(() => {
        function updatePosition() {
            // setFinished(false)
            setPosition(window.pageYOffset);
            // setFinished(true)
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return [scrollPosition, finished];
}