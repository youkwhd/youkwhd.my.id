"use client"

import Header from "@/components/Header"
import List from "@/components/List"

import { motion } from "framer-motion"
import Marquee from "@/components/Marquee"

export default () => {
    return (
        <>
            <div className="my-3 mx-4 py-5">
                <h1 className="text-xl">Projects</h1>
            </div>
            <List contents={["DURAGEST", "TWRAP", "FE LIST", "LIBTMDB", "TUNE CWE 315", "TERMSTORY", "YOUKWHD"]} />

            <div className="my-7 mx-4 py-5">
                <p>intrested with my works? contact me:</p>
                <p className="underline">lolywk@tutanota.com</p>
            </div>

            <Marquee text="AVAILABLE FOR HIRE" divider="+" />
        </>
    )
}
