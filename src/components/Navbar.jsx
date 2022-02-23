import { links } from "../data"

const Navbar = () => {
    const handleSmoothScroll = (e) => {
        e.preventDefault()
        const element = e.target.getAttribute("href")

        const location = document.querySelector(element).offsetTop

        window.scrollTo({
            top: location - 50,
            left: 0,
        })

    }

    return (
        <nav className="nav">
            <div className="nav-main">
                <h2>Smooth Scroll</h2>
                <div>
                    {
                        links.map(item =>
                            <a href={item.url} key={item.id} onClick={handleSmoothScroll}>
                                {item.text}
                            </a>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar