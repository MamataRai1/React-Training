 
// export function Home  ()   {
//   let count = 4;
//   return (
//     <div >
//       <h1>parent component</h1>
//       <ChildComp count={count} greet={"hello"} name={"tezz"}/>
//       <ChildComp count={count} greet={"hello"} name={"tezz"}/>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores voluptates quam labore molestiae. Non porro nam numquam quam a expedita illum corporis amet repellat voluptatum, eveniet illo praesentium libero.</p>
//        <SecondChildComp greet="welcome"/>
//     </div>
//   );
// };

// import { useState } from "react";
// import LoginPage from "./LoginPage";


// const SubSChildComp =({count}) => {
//   return (
//     <div>
//       <h2>SubSchildComps</h2>
//       {count}
//     </div>
//   )
// }

// export const ChildComp = ({count,greet = "welcome", ...rest}) => {
//   return(
//     <div style={{background: "red", border:"1px solid"}}>
//       <p>child component</p>
//       <div>{count}</div>{greet} {rest.name}
//     </div>
//   );

// };

// const  Lists=[
//   {
//     id: 1,
//     name: "aapa",
//     age: 33,
//   },
//   {
//     id: 2,
//     name: "aapa",
//     age: 33, 
//   },
//   {
//     id: 3,
//     name: "aapa",
//     age: 33,
//   }
// ]
//  export default function HomePage(){
//   const [count, setCount]= useState(0)
//   function handleCount(type){
//     if(type==="inc"){
//       setCount(count + 1);
//     }
//     else{
//       setCount(count - 1);
//     }
//   }
//   return (
//     <div style={{width:"100%",}}>
//       <h1>Home P age</h1>
//       <div>
//         {count}
//         <div>
//           <button onClick={()=>setCount(count + 1)}>INC</button>
//           <button onClick={()=> setCount(count - 1)}>DEC</button>
//         </div>

//         {/* <div>
//           <p>with function</p>
//           <button onClick={handleInc}>INC</button>
//           <button onClick={handleDec }>DEC</button>
//         </div> */}
        

//         <div>
//           <p>with function</p>
//           <button onClick={()=> handleCount("inc")}>INC</button>
//           <button onClick={()=> handleCount ("dec")}>DEC</button>
//         </div>
        
//       </div>
//       <div>
//         {
//           Lists.map(((List) =><Card key={List.id} data={List}/>


//           )) }
         
//       </div>
//     </div>
//   );
//  }

//  const Card=({data})=> {
//   return(
//     <div style={{ backgroundColor: "blue",boeder: "1px xolid white"}}>
//       <h2> Name: {data.name}</h2>
//       <p>age: {data.age} </p>
//     </div>
//   );
//  };
//  <LoginPage/> 