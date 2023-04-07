import Link from "next/link"

export default () => {
    return (
        <footer className="flex justify-between">
            <div>
                <p>Intrested with my projects? Let's talk.</p>
                <Link 
                    className="underline"
                    target="_blank"
                    href="mailto:lolywk@tutanota.com"
                >
                    lolywk@tutanota.com
                </Link>
            </div>
            <div>
                <p>
                    <Link 
                        className="underline"
                        target="_blank"
                        href="https://github.com/youkwhd"
                    >
                        github
                    </Link>
                </p>
                <p>
                    <Link 
                        className="underline"
                        target="_blank"
                        href="https://www.linkedin.com/in/ahmad-fattan-b7a48a258/"
                    >
                        linkedin
                    </Link>
                </p>
            </div>
        </footer>
    )
}