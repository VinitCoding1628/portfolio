
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RisingLines({
    lineCount = 50,
    color = "#9ca3af",
    thickness = 1,
    speed = 1,
    heightMin = 100,
    heightMax = 300,
    opacityMin = 0.1,
    opacityMax = 0.4,
    direction = "bottom-to-top",
    className = "",
}) {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const generatedLines = Array.from({ length: lineCount }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * (heightMax - heightMin) + heightMin}px`,
            duration: (5 / speed) + Math.random() * (25 / speed),
            delay: Math.random() * -30,
            opacity: Math.random() * (opacityMax - opacityMin) + opacityMin,
        }));

        setLines(generatedLines);
    }, [
        lineCount,
        color,
        thickness,
        speed,
        heightMax,
        heightMin,
        opacityMax,
        opacityMin,
        direction,
    ]);

    // Determine animation paths based on direction
    const yAnimation =
        direction === "bottom-to-top"
            ? ["0vh", "-120vh"]
            : ["0vh", "120vh"];

    const startingPosition =
        direction === "bottom-to-top"
            ? { bottom: "-300px" }
            : { top: "-300px" };

    return (
        <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
            {lines.map((line) => (
                <motion.div
                    key={line.id}
                    className="absolute"
                    style={{
                        left: line.left,
                        height: line.height,
                        opacity: line.opacity,
                        width: `${thickness}px`,
                        ...startingPosition,
                        backgroundImage: `linear-gradient(to top, transparent, ${color}, transparent)`,
                    }}
                    animate={{
                        y: yAnimation,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: line.duration,
                        delay: line.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
