import Link from "next/link"

export default () => {
    return (
        <nav>
            <ul className="flex items-center justify-center [& > li]:m-10">
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}
