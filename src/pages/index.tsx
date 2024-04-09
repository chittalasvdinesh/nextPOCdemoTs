import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
import { stat } from "fs";
import { Card } from "@/components/Card";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });

export default function Home({users}:{users:any}) {
  const { data: session, status } = useSession();
  const user = session?.user?.name || "Guest"
  console.log(status, session)
  if (status === "loading") return <h2 className="text-center">Loading...</h2>
  return (
    <div>
    <div className={`${inter.variable} font-sans`}>
      <h1 className="px-2">Welcome {user}</h1>
      <h2 className="text-center">Home page</h2>

      {/* <Card /> */}

    </div>
    <div className="flex flex-wrap justify-evenly h-56 mt-5">
      {
        users?.slice(0,10).map((user:any)=>{
         return <Card key={user.id} id={user.id} name={user.userId} username={user.username} email={user.email}/>
        })
      }
    </div>
    </div>
  );
}

export const getServerSideProps=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users");
  const users=await response.json()

  return {
    props:{users}
  }
}


