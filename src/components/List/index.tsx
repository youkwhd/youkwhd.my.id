import Animated from "@/components/Animated"

import { motion, Variants, Transition } from "framer-motion"
import { useEffect, useState } from "react"

export default ({ contents }: { contents: Array<string> }) => {
    /* TODO: concat `contents` and `hoversIentifier` as one
     */
    const [hoversIdentifier, setHoversIdentifier] = useState<Array<Boolean>>(Array(contents.length).fill(false))

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
        <ul className="__list text-6xl">
            {contents.map((content, __index) => (
                <motion.li
                    key={__index}
                    className="cursor-pointer"
                    whileHover="hover"
                    onHoverStart={() => setHoversIdentifier((hovers) => { hovers[__index] = !hovers[__index]; return [...hovers] })}
                    onHoverEnd={() => setHoversIdentifier((hovers) => { hovers[__index] = !hovers[__index]; return [...hovers] })}
                >
                    <hr className="invisible" />
                    <div className="relative overflow-hidden flex justify-between">
                        <motion.div>
                            <motion.p
                                variants={titleVariant}
                                transition={titleTransition}
                            >
                                {content}
                            </motion.p>
                            <motion.p
                                variants={titleVariant}
                                transition={titleTransition}
                                className="absolute"
                                style={{ fontFamily: "serif"}}
                            >
                                {content}
                            </motion.p>
                        </motion.div>
                        <div className="pt-2 text-sm">
                            {hoversIdentifier[__index] && 
                                <Animated.Text text="2023 / Developement" />
                            }
                        </div>
                    </div>
                    <hr className="invisible"/>
                </motion.li>
            ))}
        </ul>
    )
}