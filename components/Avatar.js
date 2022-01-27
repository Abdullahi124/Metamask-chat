import Image from 'next/image'
import { useMoralis } from "react-moralis";
function Avatar({username,logoutOnpress}) {
    const {user,logout}=useMoralis();
    return (
       <Image className='bg-black rounded-full hover:opacity-75 cursor-pointer' layout='fill' onClick={()=> logoutOnpress && logout()} src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get('username')}.svg`} />
    )
}

export default Avatar
