import{ combineReducers} from 'redux'
import { createStore } from "redux"
import authreducer from './auth'
import cartreducer from './cart'




const rootReducer =combineReducers({
    auth:authreducer,
    cart:cartreducer
})

const store = createStore(rootReducer)

export default store

// const LOGIN ='login'
// const LOGOUT ='logout'
// const ADMINLOGIN ='adminlogin'

// const initialstate={
//     user:null,
//     admin:null

// }



// export const adminlogin=(name)=>(
//     {
//         type:ADMINLOGIN,
//         payload:name
//     }
// )

// export const logout=()=>({
//     type:LOGOUT,
   
// })

// export const login=(name)=>(
//     { 
//     type:LOGIN,
//     payload:name
//     }
// )

// const reducer=(state=initialstate, action)=>{
    
//     switch (action.type) {
//         case LOGIN:
//             return{
//             ...state,
//               user:action.payload
//             }
//         case LOGOUT:
//             return{
//                ...state,
//                 user:null,
//                 admin:null
//             }
//         case ADMINLOGIN:
//             return{
//                 ...state,
//                 admin:action.payload
//             }
    
//         default:
//             return state
//     }
// }

