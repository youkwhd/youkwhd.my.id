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

type Item = {
    text: string,
    divider: string,
}

export default ({ text, divider, __iteration }: { text: string, divider: string, __iteration?: number }) => {
    const [items, setItems] = useState<Array<Item>>([])

    useEffect(() => {
        if (!__iteration)
            __iteration = 15

        for (let i = 0; i < __iteration; i++)
            setItems((items) => [...items, {text, divider}])
    }, [])

    return (
        <Marquee
            gradient={false}
            className="text-3xl h-20 border-y border-white mb-10"
        >
            {items.map((items, __index) => <Item key={__index} content={items.text} divider={items.divider} />)}
        </Marquee>
    )
}