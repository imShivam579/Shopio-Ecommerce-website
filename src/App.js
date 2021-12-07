import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductHighlight from "./components/ProductHighlight/ProductHighlight";
import Footer from "./components/Footer/index";
import ProductCategory from "./components/ProductCategory";
function App() {
  return (
    <>
      <Navbar />
      <ProductHighlight />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default App;
