 
// import { useReducer } from 'react';
// import './login.css'


// const initialState = {
//     username: "Mamata",
//     password: "",
// };

// const reducer =(state, action)=>{
//     if (action.type === "username"){
//         return {...state, username:action.playload};
//     }
//     else  {
//         if (action.payload == "mamata"){
//         window.alert("insecure password");
//         return state;
//         }else{
//             return {...state,password:action.payload};
//         }
//     }
// };

// export default function LoginPage(){
// const [formData, dispatch] = useReducer(reducer, initialState) ;
// // console.log("------formData",formData);
//   return (
//     <div style ={{width:"100%",textAlign:"center"}}>
//         <h1>Login Page</h1>
//         <form>
//             <div className='username'>
//                 <label htmlFor="username">Username:</label>
//                 <input type="text" 
//                 placeholder="username"
//                 value = {formData.username}
//                 onChange={(e) =>
//                     dispatch({type: "username",payload:e.target.value})
//                     }/>
//             </div >
//             <div className='password'>
//                 <label htmlFor="password">Password:</label>
//                 <input type="password"
//                  placeholder=" password" 
//                 value={formData.password}
//                 onChange={(e)=>
//                     dispatch({type:"password",payload:e.target.value})
//                 } />
//             </div>
//             <button>Login</button>
//         </form>
//     </div>
//   );
// }


 
 

export default function LoginPage(){
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        console.log("password", username);
        console.log("password", password);
        e.target.reset();
    }
 
  return (
    <div style ={{width:"100%",textAlign:"center"}}>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <div  >   
                <input type="text" name="username" placeholder="username"/>
            </div >
            <div  >
                 
                <input type="password" name="password" placeholder=" password"  />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  );
}
