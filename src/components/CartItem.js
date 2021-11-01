const CartItem = ({data,delFromCart,delAllFromCart}) => {
    let {id,name,price,quantity} = data;
  return (
    <div className="cartitem"> 
      <h4>{name}</h4>
      <h5>${price} x {quantity} = ${price*quantity} </h5>
      <button onClick={()=>delFromCart(id)}>Remove One</button>
      <button onClick={()=>delFromCart(id,true)}>Remove All</button>
    </div>
  );
};

export default CartItem;
