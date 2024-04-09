import { GetStaticProps } from 'next';
import React from 'react'

const News = ({data}:{data:string}) => {
  return (
    <h1 className='content'>News - {data}</h1>
  )
}


export default News;



export const getStaticProps=(async(context)=>{
  console.log("Running get static props",context.previewData)
    return {
        props:{
            data: context.preview?"List of Draft articles": "List of published articles"
        }
    }

}) satisfies GetStaticProps