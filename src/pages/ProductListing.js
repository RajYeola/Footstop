// import faker from "faker";
import { useData } from "../context/data-context";
import { RiShoppingCartLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Link, Route, useParams } from "react-router-dom";

// const data = [...Array(50)].map((item) => ({
//   id: faker.random.uuid(),
//   name: faker.commerce.productName(),
//   image: faker.random.image(),
//   price: faker.commerce.price(),
//   material: faker.commerce.productMaterial(),
//   brand: faker.lorem.word(),
//   // inStock: faker.random.boolean(),
//   // fastDelivery: faker.random.boolean(),
//   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
//   offer: faker.random.arrayElement([
//     "Save 50",
//     "70% bonanza",
//     "Republic Day Sale"
//   ]),
//   idealFor: faker.random.arrayElement([
//     "Men",
//     "Women",
//     "Girl",
//     "Boy",
//     "Senior"
//   ]),
//   level: faker.random.arrayElement([
//     "beginner",
//     "amateur",
//     "intermediate",
//     "advanced",
//     "professional"
//   ]),
//   color: faker.commerce.color()
// }));

export default function ProductListing() {

  const { state, dispatch, data } = useData();

  return (
    <div>
      <h1>ProductListing</h1>
      <div className="disp-flex">
        {
          data.map((item) => (
            <div className="card mx-1 my-1" key={item.id}>
              <img src={item.image} alt="card-product"
                className="card-product-header" />
              <div className="card-body">
                <div className="card-heading">{item.brand.toUpperCase()}</div>
                <div className="card-price">
                  <span className="card-discount-price">{item.price}</span>
                  <span className="card-original-price">₹450</span>
                  <span className="card-discount">22% off</span>
                  {/* <span>{state.cartItems.map(({ id, qty }) => id === item.id ? qty : 0)}</span> */}
                </div>
              </div>
              {/* <div className="card-badge card-badge-feature">
              FEATURED
            </div> */}
              {/* <i onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: item })} className="far fa-heart card-wishlist"></i> */}
              { state.wishlistItems.some(({id}) => item.id === id) ? <RiHeartFill className="card-wishlist" onClick={() => dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })}/> :<RiHeartLine className="card-wishlist" onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: item })}/>}
              <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })} className="btn btn-icon btn-secondary my-1 mx-05">
                <RiShoppingCartLine/> {state.cartItems.some(({id}) => item.id === id) ? <Link to="/cart">Go to Cart</Link>: "Add to Cart"} 
              </button>
            </div>))
        }
      </div>
    </div>
  )
}