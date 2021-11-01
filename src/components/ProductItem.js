const ProductItem = ({data,addCart}) => {
let {id,name,price,image} = data;
    return( 
    <div style={{border:"thin solid gray", padding:'1rem'}}>
        <h4>{name}</h4>
        <img src={image} alt="imagen"></img>
        <h5>${price}</h5>
        <button onClick={()=>addCart(id)}>Add</button>
    </div>
    )
}

export default ProductItem