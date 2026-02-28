export type Certification = {
    name: string
    issuer: string
    verifyUrl: string
}

export const certifications: Certification[] = [
    {
        name: "IBM Cybersecurity Analyst Professional Certificate",
        issuer: "IBM",
        verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/4JCH65PCKIRH",
    },
    {
        name: "Cisco Security Operations Center Fundamentals",
        issuer: "Cisco",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/Q0ZQ8YRMJBQ5",
    },
]