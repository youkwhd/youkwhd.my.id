import Link from "next/link"
import Animated from "@/components/Animated"

import { motion, Variants, Transition } from "framer-motion"
import { useEffect, useState } from "react"

type Content = {
    title: string
    url: string
    subtitle: {
        year: number
        projectType: string
    }
}

type ContentParsed = Content & {
    isHovered: boolean
} 

const __Content_parse = (content: Content): ContentParsed => {
    const contentParsed: ContentParsed = {...content, isHovered: false}
    contentParsed.title = contentParsed.title.toUpperCase()
    return contentParsed
}

export default ({ contents, className }: { contents: Array<Content>, className?: string }) => {
    const [parsedContents, setParsedContents] = useState<Array<ContentParsed>>([])

    useEffect(() => {
        contents.forEach((content) => {
            setParsedContents((parsedContents) => [...parsedContents, __Content_parse(content)])
        })
    }, [])

    const titleTransition: Transition = {
        type: "tween",
        ease: "easeOut",
        duration: 0.2
    }

    const titleVariant: Variants = {
        hover: {
            y: "-100%",
            transition: titleTransition
        }
    }

    return (
        <ul className={`__list text-6xl ${className ? className : ""}`}>
            {parsedContents.map((content, __index) => (
                <motion.li
                    key={__index}
                    className="cursor-pointer"
                    whileHover="hover"
                    onHoverStart={() => setParsedContents((contents) => { contents[__index].isHovered = true; return [...contents] })}
                    onHoverEnd={() => setParsedContents((contents) => { contents[__index].isHovered = false; return [...contents] })}
                >
                    <Link
                        target="_blank"
                        href={content.url}
                    >
                        <hr className="invisible" />
                        <div className="relative overflow-hidden flex justify-between">
                            <motion.div>
                                <motion.p
                                    variants={titleVariant}
                                    transition={titleTransition}
                                >
                                    {content.title.toUpperCase()}
                                </motion.p>
                                <motion.p
                                    variants={titleVariant}
                                    transition={titleTransition}
                                    className="absolute"
                                    style={{ fontFamily: "serif"}}
                                >
                                    {content.title.toUpperCase()}
                                </motion.p>
                            </motion.div>
                            <div className="__subtitle pt-2 text-sm">
                                {content.isHovered && 
                                    <Animated.Text text={`${content.subtitle.year} / ${content.subtitle.projectType}`} />
                                }
                            </div>
                        </div>
                        <hr className="invisible"/>
                    </Link>
                </motion.li>
            ))}
        </ul>
    )
}