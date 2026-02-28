"use client"

import dynamic from "next/dynamic"

const MouseGlow = dynamic(
    () => import("./MouseGlow"),
    { ssr: false }
)

export default function ClientMouseGlow() {
    return <MouseGlow />
}