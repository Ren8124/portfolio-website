"use client"

import { useEffect, useRef } from "react"

export default function SecurityBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")!

        let width = window.innerWidth
        let height = window.innerHeight

        canvas.width = width
        canvas.height = height

        const fontSize = 14
        const columns = Math.floor(width / fontSize)

        const drops: number[] = Array(columns).fill(1)

        const chars = "01"

        function resize() {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener("resize", resize)

        function draw() {
            ctx.fillStyle = "rgba(5,10,20,0.12)"
            ctx.fillRect(0, 0, width, height)

            ctx.fillStyle = "#10b981"
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)]

                ctx.fillText(text, i * fontSize, drops[i] * fontSize)

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0
                }

                drops[i]++
            }

            requestAnimationFrame(draw)
        }

        draw()

        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 opacity-[0.18] pointer-events-none"
        />
    )
}