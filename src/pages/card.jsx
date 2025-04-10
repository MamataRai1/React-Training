const Lists=[
    {
        id: 1,
        name: "binite",
        age: 20

    },
    {
        id: 1,
        name: "binite",
        age: 20  
    },
    {
        id: 1,
        name: "binite",
        age: 20
    }
]

import React from 'react'

const card = () => {
    []
  return (
    
       <div>
      <h1>Home Page</h1>
      <div>
        <input/>
      </div>
      <div>
        {
          Lists.map(((List) =><Card key={List.id} data={List}/>


          )) }
         
      </div>
     
    </div>
  )
}

export default card
