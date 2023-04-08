import { motion, Variants, Transition } from "framer-motion" 

export default ({ text }: { text: string }) => {
    const parent: Variants = {
        visible: (i = 1) => ({
            transition: {
                staggerChildren: 0.02,
                delayChildren: 0.01 * i
            }
        })
    }

    const childrenTransition: Transition = {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
    }

    const children: Variants = {
        hidden: {
            y: 20,
            opacity: 0,
            transition: childrenTransition,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: childrenTransition,
        }
    }

    return (
        <motion.div
            variants={parent}
            initial="hidden"
            animate="visible"
        >
            {text.split(" ").map((word, __index) => (
                <motion.span
                    key={__index + word}
                    variants={children}
                    className="mr-1 inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    )
}