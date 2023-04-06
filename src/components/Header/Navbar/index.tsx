import Link from "next/link"

export default () => {
    return (
        <nav>
            <ul className="flex items-center justify-center [&>li]:mx-2">
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
