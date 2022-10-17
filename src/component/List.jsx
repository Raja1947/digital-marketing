import React from 'react'

function List(props) {
    const content=props.data.map((data,i)=>{
        return(
            <>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.class}</li>
            </>
        )
        
    })
  return (
    <>{content}</>
   
  )
}

export default List