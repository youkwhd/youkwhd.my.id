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

const Item = (item: ItemT) => {
    return (
        <>
            <ItemContent text={item.text} />
            <ItemDivider text={item.divider} />
        </>
    )
}

type ItemT = {
    text: string,
    divider: string,
}

export default ({ text, divider, __iteration }: { text: string, divider: string, __iteration?: number }) => {
    const [items, setItems] = useState<Array<ItemT>>([])

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
            {items.map((items, __index) => <Item key={__index} text={items.text} divider={items.divider} />)}
        </Marquee>
    )
}