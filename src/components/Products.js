import { useReducer } from "react";
import { Types } from "../actions/ProductsCartActions";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../reducers/ProductsCartReducers";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
const Products = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart,totalCart } = state; // Son las constantes definidas en el reducer

  useReducer();

  const addCart = (id) => {
    //console.log(id);
    dispatch({ type: Types.ADD_TO_CART, payload: id }); //Logica en el reducer
  };
  const delFromCart = (id,all= false) => {
    if (all){
        dispatch({ type: Types.REMOVE_ALL_TO_CART, payload: id });
    }else{
        dispatch({ type: Types.REMOVE_TO_CART, payload: id });
    }
  };

  const clearCart = (id) => {
    dispatch({ type: Types.CLEAR_TO_CART });
  };
  return (
    <div>
      <h1>Products</h1>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={products.id} data={product} addCart={addCart} />
        ))}
      </article>
      <article style={{padding:'20px',textAlign: 'initial'}}>
      <h3 style={{textAlign: 'initial'}}>Products Cart</h3>
        <button onClick={clearCart}>Clear Cart</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delFromCart={delFromCart}
          />
        ))}
      </article>
    </div>
  );
};

export default Products;
