import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
const ProductItem = ({data,addCart}) => {
let {id,name,price,image} = data;
    return( 
    <div style={{border:"thin solid gray", padding:'1rem'}}>
        <h4>{name}</h4>
        <img src={image} alt="imagen"></img>
        <hr/>
        <h5>Price: ${price}</h5>
        <button style={{cursor:'pointer'}} onClick={()=>addCart(id)}>Add  <FontAwesomeIcon icon={faCartPlus}/></button>
    </div>
    )
}

export default ProductItem