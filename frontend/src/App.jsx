import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return(
    <>
      <Header />
      <Hero />
      <main>
        <ProductGrid/>
      </main>
      <Footer/>
    </>
  );
}

export default App;