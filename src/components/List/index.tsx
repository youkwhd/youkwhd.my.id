export default ({ contents }: { contents: Array<string> }) => {
    return (
        <ul className="__list text-6xl">
            {contents.map((content) => (
                <li>
                    <hr className="invisible"/>
                    <div className="relative overflow-hidden flex justify-between">
                        <div>
                            <p>{content}</p>
                            <p className="absolute" style={{ fontFamily: "serif"}}>{content}</p>
                        </div>
                        <div className="pt-2">
                            <ul className="flex text-xl [&>li]:mx-2">
                                <li>2023</li>
                                <li>/</li>
                                <li>Development</li>
                                <li>/</li>
                                <li>Library</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="invisible"/>
                </li>
            ))}
        </ul>
    )
}