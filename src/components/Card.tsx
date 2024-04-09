import React from 'react'

export const Card = ({name,id,username,email}:{name:string,id:number,username:string,email:string}) => {
  return (
    <div className='border bg-blue-500 w-56 h-56 mb-5 p-5'>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
    </div>
  )
}
