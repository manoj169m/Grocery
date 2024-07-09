
const ADD='add-cart'
const REMOVE ='remove-cart'
const CLEAR ='clear'

const initialstate ={
    cart:[]
}


export const addcart =(item)=>(
    {
        type:ADD,
        payload:item
    }
)

export const removecart =(id)=>(
    {
        type:REMOVE,
        payload:id
    }
)

export const clearcart =()=>(
    {
        type:CLEAR,

    }
)

const cartreducer =(state=initialstate, action)=>{

    switch (action.type) {
        case ADD:
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
            case REMOVE:
                return{
                    ...state,
                    cart:state.cart.filter((x)=>x.id !== action.payload)
                }
            case CLEAR:
                return{
                    ...state,
                    cart:[]
                }

        default:
          return  state;
    }
}

export default cartreducer