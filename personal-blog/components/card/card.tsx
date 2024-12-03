"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from "gsap/Draggable";
import { RoughEase } from "gsap/EasePack";


export function CardGrid({ children }: { children: React.ReactNode }) {
    const gridRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={gridRef} className="flex flex-wrap flex-row m-4 my-2 cards">
            {children}
        </div>
    );
}

export function Card({ children }: { children: React.ReactNode }) {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(Draggable, RoughEase);
        if (cardRef.current) {
            Draggable.create(cardRef.current, {
                bounds: cardRef.current.parentElement,
                onDragEnd: function () {
                    if (cardRef.current && this.hitTest(cardRef.current.parentElement, '25%')) {
                        gsap.to(this.target, {
                            x: this.endX,
                            y: this.endY,
                            ease: "bounce.out",
                            duration: 1.5, // Increase duration for more bounce effect
                            backgroundColor: "#587792",
                            rotation: 360, // Add rotation effect
                            onComplete: () => {
                                gsap.to(this.target, {
                                    y: this.endY - 100,
                                    x: this.endX + 100,
                                    ease: "bounce.out",
                                    duration: 1.5,
                                    yoyo: true,
                                    backgroundColor: "#8DB1AB", // Change color to green
                                    rotation: -720 // Add additional rotation effect
                                });
                            }
                        });
                    }
                }
            });
        }
    }, []);

    return (
        <div ref={cardRef} className="card h-auto p-2 m-2 w-full sm:w-1/2 lg:w-1/3 flex-none bg-cover rounded-2xl sm:rounded-md border border-gray-500 border-dotted overflow-hidden">
            {children}
        </div>
    );
}
