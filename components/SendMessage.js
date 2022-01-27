import { useState } from "react"
import { useMoralis } from "react-moralis"


function SendMessage({ endOfMessageRef }) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState('')
    const sendMessage = (e) => {
        e.preventDefault();
        if (!message) return
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        messages.save({
            message: message,
            user: user.getUsername(),
            ethAddress: user.get("ethAddress")
        }).then((message) => {
            //message sent successfully
        }, (error) => {
            console.log(error.message)
        })

        endOfMessageRef.current.scrollIntoView({ behaviour: "smooth" })
        setMessage('')

    }
    return (
        <form className="flex fixed bottom-10 max-w-2xl px-6 py-5 rounded-full border-4 border-blue-400 w-11/12 bg-black opacity-80">
            <input value={message} onChange={e => setMessage(e.target.value)} type="text" placeholder={`Enter your message ${user.getUsername()}`} className="flex-grow outline-none bg-transparent pr-5 text-white placeholder-gray-400" />
            <button type='submit' onClick={sendMessage} className="text-pink-500">Send</button>
        </form>
    )
}

export default SendMessage
