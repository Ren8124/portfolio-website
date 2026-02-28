export type Project = {
    slug: string
    title: string
    description: string
    repo: string

    /* shown on homepage card */
    previewLogs: string[]

    /* deep analysis page */
    analysis: {
        overview: string
        problem: string
        architecture: string
        implementation: string
        security: string
        challenges: string
        outcomes: string
        future: string
    }
}

export const projects: Project[] = [
    /* ======================================================
       1️⃣ WEB ATTACK DETECTION SYSTEM
    ====================================================== */
    {
        slug: "threat-detection-system",
        title: "Web Attack Detection & Forensic Logging System",
        description:
            "Real-time HTTP threat detection platform performing attack classification and structured forensic logging aligned with SOC workflows.",

        repo:
            "https://github.com/Ren8124/web-attack-detection-forensic",

        previewLogs: [
            "[REQUEST] POST /login",
            "[DETECTED] SQL Injection",
            "[PAYLOAD] ' OR 1=1 --",
            "[SOURCE IP] 192.168.0.14",
            "[ACTION] BLOCKED",
            "[FORENSIC-ID] FLS-2025-0012",
        ],

        analysis: {
            overview:
                "This project explores practical web security monitoring by designing a lightweight Security Operations Center (SOC)-style detection pipeline capable of analyzing HTTP requests in real time.",

            problem:
                "Traditional application logs store raw request data but lack structured forensic context. Incident responders require categorized, timestamped, and traceable events to reconstruct attacks effectively.",

            architecture:
                "Incoming traffic is intercepted through middleware before route execution. Requests are parsed into normalized structures and passed into a detection engine. Classified threats are forwarded into a forensic logging module producing investigation-ready records.",

            implementation:
                "Built using Flask with modular middleware architecture. Detection rules include SQL injection, XSS payload inspection, and directory traversal pattern matching. Logging outputs structured JSON events enabling replay analysis.",

            security:
                "Security design focuses on deterministic detection rules ensuring explainability. The system separates detection from response logic, allowing future integration with SIEM pipelines or anomaly detection ML models.",

            challenges:
                "Balancing detection accuracy with performance required optimizing regex inspection and minimizing request latency overhead.",

            outcomes:
                "The system successfully detected simulated attacks while generating structured logs usable for digital forensic investigation workflows.",

            future:
                "Future improvements include behavioral anomaly detection, dashboard visualization, and distributed event streaming.",
        },
    },

    /* ======================================================
       2️⃣ 3D GLOBE VISUALIZATION
    ====================================================== */
    {
        slug: "3d-globe-visualization",
        title: "3D Globe Visualization with Three.js",
        description:
            "Interactive WebGL-based globe rendering geographic datasets with real-time user interaction.",

        repo:
            "https://github.com/Om-Patel-2003/World_Sphere",

        previewLogs: [
            "[ENGINE] WebGL Renderer Initialized",
            "[DATA] GeoJSON Boundaries Loaded",
            "[VERTICES] 48,231",
            "[FRAME RATE] 60 FPS",
            "[CAMERA] OrbitControls Enabled",
            "[STATUS] Rendering Stable",
        ],

        analysis: {
            overview:
                "A browser-based 3D visualization system designed to explore geospatial rendering using Three.js and WebGL.",

            problem:
                "Geospatial visualization tools are often heavy and non-interactive. The goal was to build an accessible visualization platform directly inside a web browser.",

            architecture:
                "A Three.js scene graph manages lighting, geometry, and camera interactions. Geographic boundaries are mapped onto spherical geometry using GeoJSON datasets.",

            implementation:
                "Custom mesh generation renders country outlines efficiently. OrbitControls provide intuitive rotation and zoom while maintaining stable rendering performance.",

            security:
                "Although visualization-focused, the system considers secure asset loading and controlled data sourcing practices.",

            challenges:
                "Handling large GeoJSON datasets without degrading performance required geometry optimization and efficient rendering strategies.",

            outcomes:
                "Achieved smooth real-time interaction and visually immersive geographic exploration.",

            future:
                "Future work aims to visualize cybersecurity threat intelligence flows across geographic regions.",
        },
    },

    /* ======================================================
       3️⃣ TRACK MY WASTE
    ====================================================== */
    {
        slug: "track-my-waste",
        title: "TrackMyWaste — Smart Waste Monitoring System",
        description:
            "Digital waste tracking and analytics platform supporting sustainability monitoring and environmental reporting.",

        repo:
            "https://github.com/Ren8124/track-my-waste",

        previewLogs: [
            "[ENTRY] Plastic Waste Logged",
            "[CATEGORY] Household",
            "[WEIGHT] 1.8kg",
            "[ANALYTICS] Weekly Trend Updated",
            "[REPORT] Sustainability Score Generated",
            "[STATUS] Monitoring Active",
        ],

        analysis: {
            overview:
                "TrackMyWaste applies software engineering principles to sustainability by enabling structured waste monitoring and analytics.",

            problem:
                "Waste tracking is largely manual and lacks analytics visibility. Users cannot easily evaluate environmental impact trends.",

            architecture:
                "Frontend interfaces collect categorized waste entries which flow into backend APIs responsible for validation, storage, and analytics computation.",

            implementation:
                "Backend services implement modular configuration and reporting workflows while maintaining scalable data handling practices.",

            security:
                "Environment-variable based configuration protects sensitive credentials and supports secure deployment practices.",

            challenges:
                "Designing flexible reporting logic while maintaining clean data structures required iterative schema refinement.",

            outcomes:
                "Enabled automated reporting workflows and improved visibility into waste generation behavior.",

            future:
                "Future expansion includes IoT smart-bin integration and predictive sustainability analytics.",
        },
    },
]