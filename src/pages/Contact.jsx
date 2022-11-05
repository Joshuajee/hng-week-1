import { useState } from "react"

export default function Contact () {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [firstNameHint, setFirstNameHint] = useState(false)
    const [lastNameHint, setLastNameHint] = useState(false)
    const [emailHint, setEmailHint] = useState(false)
    const [messageHint, setMessageHint] = useState(false)

    const error = (value) => {
        return value ? "error" : "" 
    }

    const validateTextField = (value, length) => {
        if (value.length <= length) return true

        return false
    }

    const editFirstName = (e) => {
        const value = e.target.value
        setFirstName(value)

        if (validateTextField(value , 2)) return setFirstNameHint(true)
        setFirstNameHint(false)
    }

    const editLastName = (e) => {
        const value = e.target.value
        setLastName(value)

        if (validateTextField(value, 2)) return setLastNameHint(true)
        setLastNameHint(false)
    }

    const editEmail = (e) => {
        const value = e.target.value
        if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value)) return setEmailHint(false)
        setEmailHint(true)
    }

    const editMessage = (e) => {
        const value = e.target.value
        if (value.length <= 10) return setMessageHint(true)
        setMessageHint(false)
    }

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
                        <label for="first_name">First Name</label>
                        <input className={error(firstNameHint)} type={"text"}  id="first_name" placeholder="Enter your first name" onChange={editFirstName} />
                        {firstNameHint && <text className="helper-text">Name too short, minumum of 3 characters</text>}
                    </div>

                    <div className="field">
                        <label for="last_name">Last Name</label>
                        <input className={error(lastNameHint)} type={"text"}  id="last_name" placeholder="Enter your last name" onChange={editLastName} />
                        {lastNameHint && <text className="helper-text">Name too short, minumum of 3 characters</text>}
                    </div>

                </div>

                <div>
                    <label for="email">Email</label>
                    <input className={error(emailHint)} type={"email"} id="email" placeholder="yourname@email.com" onChange={editEmail} />
                    { emailHint && <text className="helper-text">Invalid email address.</text> }
                </div>

                <div className="msg_container">
                    <label for="message">Message</label>
                    <textarea className={error(messageHint)}  id={"message"} placeholder="Send me a message i will reply as soon as possible..." onChange={editMessage}></textarea>
                    {messageHint && <text className="helper-text" style={{color: "#F83F23"}}>Message too short, minumum of 10 characters</text>}
                </div>

                <div className="term">
                    <input type={"checkbox"}  className="term_check" />
                    <div> <text>You agree to providing your data to <strong>{firstName} {lastName}</strong> who may contact you.</text></div>
                    {/* <div><text className="helper-text">This is a hint text to help user.</text></div> */}
                </div>

                <button id="btn__submit">Send Message</button>

            </form>

        </div>
    )
}