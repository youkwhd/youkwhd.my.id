"use client"

import Footer from "@/components/Footer"
import List from "@/components/List"
import Marquee from "@/components/Marquee"
import { useEffect, useState } from "react"

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
        url: "https://www.npmjs.com/package/infinite-scroll.ts",
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
        url: "https://www.themoviedb.org/documentation/api/wrappers-libraries",
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
            projectType: "Game Generator"
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

export default () => {
    const [loading, setLoading] = useState(true)

    /* Not really waiting for everything to finish.
     * Since <List /> and <Marquee /> takes time to actually build.
     */
    useEffect(() => {
        setLoading((state) => !state)
    }, [])

    if (loading)
        return (
            <div className="w-full h-full bg-__primary flex items-center justify-center flex-col transition-opacity duration-75 ease-out">
                <h1 className="text-4xl">:: youkwhd</h1>
                <span className="text-xl">Loading</span>
            </div>
        )

    return (
        <>
            <h1 className="text-xl">Featured Projects 2022 - 2023</h1>
            <List contents={listContent} className="my-6 py-4" />
            <Marquee text="AVAILABLE FOR HIRING" divider="+" />
            <Footer />
        </>
    )
}
