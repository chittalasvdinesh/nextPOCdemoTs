import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import useSWR from 'swr';

const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Not Fund")
    }
    const data = await response.json();
    return data;
}

const Dashboard = () => {
    const {status}=useSession();

    const { data, error, isLoading } = useSWR('https://api.github.com/repos/vercel/swr', fetcher)

    if (error) {
        return <div className='border-red-500 flex justify-center'>
            <h2>An error has occured {error.message}</h2>
        </div>
    }

    if (isLoading || status==="loading") {
        return <h1 className='flex justify-center items-center'>Loading.....</h1>
    }

    if(status==="unauthenticated"){
        signIn()
        return;
    }

    return (
        <div className='flex justify-center items-center'>
        <div className='border rounded border-green-500 flex flex-col justify-center items-center w-60'>
            <h2>Dashboard</h2>
            <h2>{data.name}</h2>
            <p>{data.network_count}</p>
            <p>{data.subscribers_count}</p>
        </div>
        </div>
    )
}


export default Dashboard;