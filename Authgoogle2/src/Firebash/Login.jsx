import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth, db, provider } from "../../Fireconfige"
import { doc, setDoc } from "firebase/firestore"

export default function Login() {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const navigate = useNavigate()

    const handlelogin = async () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(data => {
                setDoc(doc(db, "users", data.user.uid), {
                    email
                })
                console.log("added");
                navigate("/dashboard");
            })
    }


    const handlegoogle = async () => {
        await signInWithPopup(auth, provider)
            .then(user => {
                console.log(user)
                navigate("/dashboard")
            })
    }

    return (
       <>
        <div className="container">
            <div className='main1'>




                <div className="box1">
                    <h1>Login</h1>
                    <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type="text" placeholder='Enter password' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <br /><br />
                    <button onClick={handlelogin}>Login</button>
                    <br />
                    <div className="box2">
                        <hr /><p>OR</p><hr /></div>
                    <button onClick={handlegoogle}>Login with google</button>

                </div>

            </div>
        </div>
        </>
    )
}
