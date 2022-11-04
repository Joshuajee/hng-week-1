import { useState } from "react"

export default function Contact () {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const submit = (e) => {
        e.preventDefault()
    } 

    return (
        <div className="contact__form">

            <h1 className="heading">Contact Me</h1>

            <h4 className="heading_2">Hi there, contact me to ask me about anything you have in mind.</h4>

            <form onSubmit={submit}>

                <div className="name">

                    <div className="field">
                        <label>First Name</label>
                        <input type={"text"} required id="first_name" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="field">
                        <label>Last Name</label>
                        <input type={"text"} required id="last_name" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} />
                    </div>

                </div>

                <div>
                    <label>Email</label>
                    <input type={"email"} required id="email" placeholder="yourname@email.com" />
                </div>

                <div className="msg_container">
                    <label>Message</label>
                    <textarea id={"message"} required placeholder="Send me a message i will reply as soon as possible..."></textarea>
                </div>

                <div className="term">
                    <input type={"checkbox"} required className="term_check" />
                    <div> <text>You agree to providing your data to <strong>{firstName} {lastName}</strong> who may contact you.</text></div>
                </div>

                <button id="btn__submit">Send Message</button>

            </form>

        </div>
    )
}