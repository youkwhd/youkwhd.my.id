import "@/css/__global.css"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "youkwhd",
    description: "portfolio",
}

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
