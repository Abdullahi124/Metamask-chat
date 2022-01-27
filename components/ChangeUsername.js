import { useMoralis } from "react-moralis";

function ChangeUsername() {
    const {user,setUserData,isUserUpdating,userError}=useMoralis()

    const setUsername=()=>{
        const username=prompt(`Enter your new user name . (The current one is ${user.getUsername()})`)
        if(!username) return;
        setUserData({
            username
        })
    }
    return (
        <div className="absolute top-5 right-5 text-md">
            <button onClick={setUsername} disabled={isUserUpdating} className=" hover:text-pink-700">Change ur username</button>
        </div>
    )
}

export default ChangeUsername
