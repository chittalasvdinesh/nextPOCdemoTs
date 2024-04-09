import Link from 'next/link';
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image';

const Header = () => {
  const { data: session, status } = useSession();
  console.log({ session })

  return (
    <div className='bg-gray-700 p-2 text-white flex justify-between fixed w-full'>
      <h2>
        NEXT
      </h2>
      {/* <ul className={`flex ${status === "loading" ? "opacity-0" : "opacity-1"} transistion-all duration-200 ease-in`}> */}
      <ul className={`flex`}>
        <li className='px-2'>
          <Link href='/'>
            Home
          </Link>
        </li>
        {session && <li className='px-2'>
          <Link href='/dashboard'>
            Dashboard
          </Link>
        </li>}
        <li className='px-2'>
          <Link href='/post'>
            Posts
          </Link>
        </li>
        {!session && (<li className='px-2'>
          <Link href='/api/auth/signin'>
            <button onClick={(e) => {
              e.preventDefault()
              signIn('github')
            }}>Sign In</button>
          </Link>
        </li>)}
        {session &&
          <li className='px-2'>
            <Link href='/api/auth/signout'>
              <button onClick={(e) => {
                e.preventDefault()
                signOut()
              }}>SignOut</button>
            </Link>
          </li>}
       {
        session &&
        <li className='px-2'>
          <Image src={session?.user?.image ||""} className='rounded-full' width={30} height={30} alt='user' title={session?.user?.name ||""}/>
        </li>
       }

      </ul>
    </div>
  )
}


export default Header;