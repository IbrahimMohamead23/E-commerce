

const cart = [];

const handleCart = (state = cart, action) => {
   
    const product = action.payload;
    switch(action.type){
        case 'ADDITEM': 
          
            const exist = state.find(x => x.id === product.id);
             if(exist){
                return state.map(x => x.id === product.id ? {...x, qty: x.qty + 1} : x );

             }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                         qty: 1,
                    }
                ]
             }

        break;
          case 'REMOVE':
            const existl = state.find(x => x.id === product.id ? {...x, qty: x.qty - 1} : x) 
            if(existl.qty === 1){
                return state.filter(x => x.id !== existl.id)
            }else{
                return state.map(x => x.id === product.id ) 
            }
            break;

        default:
              return state;
        break;
    }
}

export default handleCart ;