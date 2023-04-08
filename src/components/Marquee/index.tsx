import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"

const ItemDivider = ({ text }: { text: string }) => {
    return (
        <span className="mx-2">
            {text}
        </span>
    )
}

const ItemContent = ({ text }: { text: string }) => {
    return (
        <p>
            {text}
        </p>
    )
}

const Item = ({ content, divider }: { content: string, divider: string }) => {
    return (
        <>
            <ItemContent text={content} />
            <ItemDivider text={divider} />
        </>
    )
}

const __iterate = (from: number, to: number, callback: Function) => {
    for (; from <= to; from++)
        callback()
}

export default ({ text, divider, __iteration }: { text: string, divider: string, __iteration?: number }) => {
    const [items, setItems] = useState<Array<Array<string>>>([[text, divider]])

    useEffect(() => {
        if (!__iteration)
            __iteration = 15

        __iterate(1, __iteration, () => setItems((items) => [...items, [text, divider]]))
    }, [])

    return (
        <Marquee
            gradient={false}
            className="text-3xl h-20 border-y border-white mb-10"
        >
            {items.map((items) => <Item key={items[0] + items[1]} content={items[0]} divider={items[1]} />)}
        </Marquee>
    )
}