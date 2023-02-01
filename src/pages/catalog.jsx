import { useEffect, useState } from "react";
import Product from "../components/product";
import DataService from '../services/dataService';
import "./catalog.css";


function Catalog() {

    const [products, setProducts] = useState([]);


    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    }, []);

    function loadCatalog() {
        let service = new DataService(); 
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    }

    function magicTest() {
        console.log("Behold, the magic!!");
        setProducts([]);
    }

    return (
        <div className="catalog">
            <h1>Check out our amazing products</h1>
            <h5>We have {products.length} products available now!</h5>

            <button onClick={magicTest} className="btn btn-danger">Magic</button>
            <br />

            {products.map( p => <Product data={p}></Product> )}

        </div>

    );
}

export default Catalog;