import { createContext, useContext, useState } from "react";
import Cart from "../Cart/Cart";

 const ShopingCartContext = createContext();



const ShopingCartProvider = ({children}) => {
     // tist is Open
    const[isloin , setIslogin] = useState(false);
    const[cartItemst , setCartItems] = useState([]);


   const OpenCart = () =>{
        setIslogin(true)
   }
   const CloseCart = () =>{
        setIslogin(false)
   }

   // get Quantity
   const getQuantity = (id) => {
          return cartItemst.find(item => item.id === id)?.quantity || 0 ;
   }

   const CartQuantity = cartItemst.reduce(
     (quantity, items) => items.quantity = quantity,0
   );

   // Add item in Catr
   const AddItem = (id) => {
     setCartItems((cartItemst) => {
          if(cartItemst.find(item => item.id === id) == null){
               return[...cartItemst, {quantity: 1}]
          }
          else{
              return cartItemst.map(item => {
               if(item.id === id){
                    return{...item, quantity: item.quantity + 1}
               }
               else{
                    return item
               }
              })
          }
     })
   }

   // Remove item in Cart
   const RemoveItem = (id) => {
      setCartItems((cartItemst) => {
         if(cartItemst.find(item => item.id === id) == null){
            return cartItemst.filter(item => item.id !== id)
         }
         else{
              return cartItemst.map(item => {
               if(item.id === id){
                    return {...item, quantity: item.quantity - 1}
               }
               else{
                    return item
               }
              })
         }
     })
   }

    
   
  return (
    <ShopingCartContext.Provider value={{
        CloseCart,
       OpenCart,
       getQuantity,
       CartQuantity,
       AddItem,
       RemoveItem,
       cartItemst,
       setCartItems

    }}>
         {children}
         <Cart isOpen={isloin}/>
    </ShopingCartContext.Provider>
  )
}

export default ShopingCartProvider

// costum hooks
export const useShopingCartContext = () => {
    return useContext(ShopingCartContext)
}