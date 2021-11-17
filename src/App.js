import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductHighlight from "./components/ProductHighlight/ProductHighlight";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCategory from "./components/ProductCategory/ProductCategory";
function App() {
  return (
    <>
      <Navbar />
      <ProductHighlight />
      <ProductCategory />
    </>
  );
}

export default App;
