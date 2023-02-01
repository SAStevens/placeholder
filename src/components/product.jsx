
import "./product.css";
import QuantityPicker from './../components/quantityPicker';
import { useEffect } from 'react';

function Product(props) {

    useEffect(function() {
        console.log("Hello, I'm a product!");
    }, []);

    return (
        <div className="product">

            <img src={"/images/" + props.data.image} alt="" ></img>

            <h5>{props.data.title}</h5>
                <div className="prices">
                    <label>Total ${props.data.price.toFixed(2)}</label>
                    <label>Price ${props.data.price.toFixed(2)}</label>
                </div>

        
            <QuantityPicker />

            <button className='btn btn-sm btn-outline-primary'>Add</button>
        </div> 
    );
}

export default Product;