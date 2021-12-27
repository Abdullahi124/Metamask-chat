import Image from 'next/image'
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate, isAuthenticated, user } = useMoralis();
    return (
        <div className="bg-black h-screen relative">
            <div className='absolute space-y-4 flex flex-col h-4/6 items-center justify-center w-full z-50'>
                <Image
                    className='object-cover rounded-full'
                    src='https://links.papareact.com/3pi'
                    width={200}
                    height={200}
                />
                <button onClick={authenticate} className='bg-yellow-500 p-4 rounded-lg animate-pulse font-bold'>Sign in with METAVERSE</button>
            </div>
            <div className='w-full h-screen'>
                <Image
                    src='https://links.papareact.com/55n'
                    layout='fill'
                    objectFit='cover'
                />
            </div>
        </div>
    )
}

export default Login
