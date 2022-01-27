import { useMoralis } from "react-moralis"
import Avatar from './Avatar'

function Message({ message }) {
    const { user } = useMoralis()
    const isUserMessage = message.get('EthAddress') === user.get("EthAddress")
    console.log(message.get('username'))
    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && 'justify-end'}`}>
            <div className={`h-8 w-8 relative ${isUserMessage && 'order-last ml-2'}`}>
                <Avatar username={user.get('username')} />
            </div>
            <div className={`flex p-3 space-x-4 rounded-lg ${isUserMessage ? 'rounded-br-none bg-pink-300' : "rounded-bl-none bg-blue-400"}`}>
                <p>{message.get('message')}</p>
            </div>

            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? 'text-pink-300' : 'text-blue-400'}`}>
                {message.get("user")}
            </p>
        </div>
    )
}

export default Message
