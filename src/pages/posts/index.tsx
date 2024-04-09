import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

 const Posts = ({posts}:{posts:[{id:string,userId:string,title:string}]}) => {
  const publicTextId=process.env.NEXT_PUBLIC_DEMO_ID;
  const publicNumberId=process.env.NEXT_PUBLIC_NUMBER_ID;
 
  return (
    <>
    {/* <Layout> */}
    <div>Posts - {publicTextId} - {publicNumberId}</div>
    {posts.map((val)=>{
        return <div key={val.id}>
          {val.id} {val.userId} {val.title} 
        </div>
    })}
    {/* </Layout> */}
    </>
  )
};

export const getServerSideProps=(async(context:GetServerSidePropsContext)=>{
const session=await getSession(context)

  // const user=process.env.DB_USER
  // const password=process.env.DB_PASSWORD;
  // const twitterURL=process.env.TWITTER_URL;
  // const currency=process.env.CURRENCY;

  // console.log(context.query)
  const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  const data=await res.json();

  if(!session){
    return {
      redirect:{
        destination:`/api/auth/signin?callbackUrl=${process.env.BASE_URL}`,
        permanent:false
      }
    }
  }

  const freeData=[{
    id:"1000",
    userId:"1000",
    title:"This is sample post"
  }]
  // console.log(user,password,twitterURL,currency)

  return{
    props:{posts:session?data:freeData}
  }
})

export default Posts;
