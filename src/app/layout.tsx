import "@/css/__global.css"

export const metadata = {
    title: "youkwhd",
    description: "portfolio",
}

export default ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="max-w-screen-2xl m-auto">{children}</body>
        </html>
    )
}
