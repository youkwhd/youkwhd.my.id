import Navbar from "@/components/Header/Navbar"

export default () => {
    return (
        <>
            <header className="flex items-center justify-between">
                <span>youkwhd</span>
                <span>{new Date().toDateString()}</span>
                <span>world</span>
            </header>
        </>
    )
}

