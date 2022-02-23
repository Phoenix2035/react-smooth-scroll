import Navbar from "./components/Navbar";


function App() {
    return (
        <main id="home">
            <Navbar />
            <section className="home">
                <h1>Home</h1>
            </section>
            <section className="products" id="products">
                <h1>Products</h1>
            </section>
            <section className="contact" id="contact">
                <h1>Contact Us</h1>
            </section>
            <section className="about" id="about">
                <h1>About Us</h1>
            </section>
            <section className="rest" />
        </main>
    )
}

export default App;
