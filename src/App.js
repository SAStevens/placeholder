import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

import Navbar from "./components/navbar";
import Catalog from "./pages/catalog";
import Footer from "./components/footer";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Catalog />

      <Footer />
    </div>
  );
}

export default App; 
