import Image from 'next/image'
import { useMoralis } from "react-moralis";
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';
function Header() {
    const { user } = useMoralis();
    return (
        <div className='text-pink-500 bg-black border-b-2 border-pink-700 p-5 sticky top-0 shadow-sm'>
            <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
                <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid '>
                    <Image className='rounded-full' src='https://links.papareact.com/3pi' layout='fill' objectFit='cover' />
                </div>
                <div className=' col-span-4 text-left lg:text-center'>
                    <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
                        <Avatar logoutOnpress />
                    </div>
                    <h1 className='text-3xl'>Welcome to the Metaverse World</h1>
                    <h2 className='text-5xl truncate font-bold'>{user.getUsername()}</h2>

                    <ChangeUsername/>
                </div>
            </div>
        </div>
    )
}

export default Header
