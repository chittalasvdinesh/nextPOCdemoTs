import Error from 'next/error'
import React from 'react'

 const Todos = ({errorCode,data}:{errorCode:number,data:[]}) => {
    if(errorCode){
        return <Error statusCode={errorCode} title='An Error Occured'/>
    }
  return (<>
    <div>Todos</div>
    {data.map((val:any)=>{
        return <div key={val.id}>
           {val.userId} | {val.title} | {val.completed?"Done":"Not Done"}
        </div>
    })}
    </>
  )
};

export default Todos

export const getServerSideProps=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/todos");
  const errorCode=res.ok?false:res.status
  const data=await res.json();

  return{
    props:{errorCode,data}
  }
}
