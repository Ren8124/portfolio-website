"use client"

export default function SecurityBackground() {
    const columns = 800   // increase width
    const rows = 250      // increase height

    const binaryBlock = Array.from({ length: rows })
        .map(() =>
            Array.from({ length: columns })
                .map(() => (Math.random() > 0.5 ? "1" : "0"))
                .join("")
        )
        .join("\n")

    return (
        <div className="matrix-wrapper">
            <pre className="matrix-content">
                {binaryBlock}
                {"\n"}
                {binaryBlock}
            </pre>
        </div>
    )
}
