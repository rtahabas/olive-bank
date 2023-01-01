import React,{ useState } from 'react'

import styles from './Signup.module.css'



const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className={styles.signupContainer}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
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
                    <span>User Name:</span>
                    <input
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                    />
                </label>
                <button className='btn'>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Signup; 