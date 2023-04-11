"use client"

import Footer from "@/components/Footer"
import List from "@/components/List"
import Marquee from "@/components/Marquee"

export default () => {
    const listContent = [
        { 
            title: "duragest",
            url: "https://github.com/youkwhd/duragest",
            subtitle: {
                year: 2023,
                projectType: "Terminal Game"
            }
        },
        {
            title: "infinite scroll",
            url: "https://github.com/youkwhd/infinite-scroll.ts",
            subtitle: {
                year: 2023,
                projectType: "TypeScript Library"
            }
        },
        {
            title: "twrap",
            url: "https://github.com/youkwhd/twrap",
            subtitle: {
                year: 2022,
                projectType: "Text Wrapper"
            }
        },
        {
            title: "libtmdb",
            url: "https://github.com/youkwhd/libtmdb",
            subtitle: {
                year: 2022,
                projectType: "C Library"
            }
        },
        {
            title: "TUNE CWE 315",
            url: "https://github.com/youkwhd/TUNE-CWE-315",
            subtitle: {
                year: 2023,
                projectType: "Web Security"
            }
        },
        {
            title: "termstory",
            url: "https://github.com/youkwhd/termstory",
            subtitle: {
                year: 2023,
                projectType: "Game generator"
            }
        },
        {
            title: "youkwhd",
            url: "https://youkwhd.com",
            subtitle: {
                year: 2022,
                projectType: "Web Development"
            }
        }
    ]

    return (
        <>
            <h1 className="text-xl">Featured Projects 2022 - 2023</h1>
            <List contents={listContent} className="my-6 py-4" />
            <Marquee text="AVAILABLE FOR HIRING" divider="+" />
            <Footer />
        </>
    )
}
