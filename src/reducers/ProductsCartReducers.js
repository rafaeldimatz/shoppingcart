import { Types } from "../actions/ProductsCartActions";
import img1 from "../assets/imageProducts/adidas.jpg";
import img2 from "../assets/imageProducts/nike.jfif"
import img3 from '../assets/imageProducts/fila.jfif';
import img4 from '../assets/imageProducts/allstar.jfif';
import img5 from '../assets/imageProducts/nb.jfif';
import img6 from '../assets/imageProducts/puma.jfif';
export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Adidas Running",
      price: 11290,
      image:img1,
    },
    {
      id: 2,
      name: "Nike Urbana",
      price: 21095,
      image:img2,
    },
    {
      id: 3,
      name: "Fila Sport",
      price: 7390,
      image:img3,
    },
    {
      id: 4,
      name: "All Start",
      price: 3400,
      image:img4,
    },
    {
      id: 5,
      name: "New Balance",
      price: 15900,
      image:img5,
    },
    {
      id: 6,
      name: "Puma Livianas",
      price: 9300,
      image:img6,
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case Types.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemCart = state.cart.find((item) => item.id === newItem.id);
      return itemCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case Types.REMOVE_TO_CART: {
      let itemToDelete = state.cart.find( item=>item.id === action.payload);
       return itemToDelete.quantity > 1?{
           ...state,
           cart:state.cart.map(item=>item.id===action.payload 
            ? {...item,quantity:item.quantity - 1}
            : item
           )
           }
           :{
            ...state,
            cart:state.cart.filter((item)=>item.id!==action.payload),
           }
    }  
    case Types.REMOVE_ALL_TO_CART: {
        return{
        ...state,
        cart:state.cart.filter((item)=>item.id!==action.payload),
        }
    }
    case Types.CLEAR_TO_CART: {
      return shoppingInitialState;
    }

    default:
      return state;
  }
}
