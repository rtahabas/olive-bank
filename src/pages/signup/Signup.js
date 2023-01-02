import React,{ useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

import styles from './Signup.module.css'



const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const {signup, error, isPending} = useSignup()


    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
    }

    return (
        <div className={styles.signupContainer}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {error && <p> {error}</p>}
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>Display Name:</span>
                    <input
                        type="text"
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                {!isPending && <button className='btn'>Login</button>}
                {isPending && <button className='btn' disabled>Loading</button>}
            </form>
        </div>
    );
}

export default Signup; 