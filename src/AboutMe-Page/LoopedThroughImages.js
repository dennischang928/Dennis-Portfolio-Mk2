import React, { useState, useEffect, useRef } from 'react';
import { useTransition, useSpringRef, animated } from 'react-spring';

// Image styles
const imgStyle = {
    borderRadius: "50%",
    width: window.innerWidth < 700 ? "50vw" : "20vw",
    height: "auto",
    aspectRatio: "1/1",
    objectFit: "cover",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2)",
};

// Preload images
const images = [];
for (let i = 1; i <= 31; i++) {
    images[i - 1] = require(`../Images/AboutMe/${i}.jpeg`);
}

const LoopedThroughImages = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const transRef = useSpringRef();
    const containerRef = useRef(null);

    // Transition configuration
    const transitions = useTransition(currentImageIndex, {
        ref: transRef,
        from: { opacity: -0.1, transform: 'scale(0.8)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: -0.1, transform: 'scale(0.8)' },
        config: { tension: 160, friction: 15 },
        exitBeforeEnter: true,
    });

    // Image change interval
    useEffect(() => {
        if (!isInView) return;
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, isHovered ? 5000 : 2000);

        return () => clearInterval(timer);
    });

    // Start transition on image index change
    useEffect(() => {
        transRef.start();
    }, [currentImageIndex]);

    // Intersection Observer to detect when the component is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ alignSelf: "center" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {transitions((style, i) => (
                <animated.img
                    key={currentImageIndex}
                    style={{ ...imgStyle, ...style }}
                    src={images[i]}
                    alt={`About Me ${currentImageIndex + 1}`}
                />
            ))}
        </div>
    );
};

export default LoopedThroughImages;