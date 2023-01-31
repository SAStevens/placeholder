
import "./product.css";
import QuantityPicker from './../components/quantityPicker';

function Product() {
    return (
        <div className="product">

            {/* <img src="https://picsum.photos/225/250" alt="" ></img> */}
            <img src=".\images\Suncloud_Fortune_24-32.JPG" width="225/250" alt="" ></img>

            <h5>Title goes here</h5>
                <div className="prices">
                    <label>Total</label>
                    <label>Price</label>
                </div>

            <QuantityPicker />

            <button className='btn btn-sm btn-outline-primary'>Add</button>
        </div> 
    );
}

export default Product;