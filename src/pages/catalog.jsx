import { useEffect, useState } from "react";
import Product from "../components/product";
import DataService from '../services/dataService';
import "./catalog.css";

function Catalog() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    useEffect(function(){
        console.log("component loaded");
            loadCatalog();
    }, []);

    function loadCatalog() {
        let service = new DataService(); 
            let prods = service.getProducts();
                console.log(prods);
                    setProducts(prods);
                    setProdsToDisplay(prods);
        //TODO: move this to a service
        let cats = ["Mens", "Womens", "Unisex"];
            setCategories(cats);
    }

    function filter(category) {
        console.log(category);
            let list = [];
                for(let i=0; i < products.length; i++) {
            let prod = products[i];
                if(prod.category === category) {
                    list.push(prod);
                }
        }
        setProdsToDisplay(list);
    }

    function clearFilter() {
        setProdsToDisplay(products);
    }

    return (
        <div className="catalog">
            <h1>Wade's Shades</h1>
            <h5>We have {products.length} exciting products available now!</h5>

            <button onClick={clearFilter} className="btn btn-sm btn-primary btn-filter">All Products</button>

            {categories.map(c => <button key={c} onClick={ () => filter(c) } className="btn btn-sm btn-primary btn-filter">{c}</button>)}
            <br />

            {prodsToDisplay.map( p => <Product key={p._id} data={p}></Product> )}

        </div>
    );
}

export default Catalog;
