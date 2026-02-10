"use client"

import { useEffect, useState } from "react"

export default function MouseGlow() {
    const [position, setPosition] = useState({ x: -500, y: -500 })

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", handleMove)
        return () => window.removeEventListener("mousemove", handleMove)
    }, [])

    return (
        <div
            style={{
                left: position.x,
                top: position.y,
            }}
            className="pointer-events-none fixed z-20 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80"
        >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(0,255,200,0.25)_0%,rgba(0,255,200,0.08)_40%,transparent_70%)] blur-2xl" />
        </div>
    )
}
