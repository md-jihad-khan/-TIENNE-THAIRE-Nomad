import { useState, useRef, useEffect } from "react";

const LazyLoadSection = ({ children, threshold = 0.1, minHeight = "200px" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            {
                rootMargin: "200px", // Start loading before it comes into view
                threshold: threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div ref={ref} style={{ minHeight: !isVisible ? minHeight : "auto" }}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazyLoadSection;
