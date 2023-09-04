
// for Add Item in Cart
export const addCart = (product) => {
    return{
        type : 'ADDITEM',
        payload : product
    }
} 


// for Remove Item in Cart
export const removeCart = (product) => {
    return{
        type : 'REMOVE',
        payload : product
    }
}

export const OpenCat = () => {
    return {
        type : 'OPEN'
    }
}

export const CloseCat = () => {
    return {
        type : 'CLOSE'
    }
}