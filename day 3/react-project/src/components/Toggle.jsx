import React from 'react'
import {useState} from 'react'

const Toggle = () => {
    // isLoggedIn initial value - true
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <div className='flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow mx-auto mt-10'>
            {/* Ternary Operator for conditional rendering */}
            <h2>
            {isLoggedIn ? "Welcome Back, User!" : "Please Log In"}
            </h2>

            {
                isLoggedIn && 
                <p>
                    You Have New Notifications
                </p>
            }
<button className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition' onClick={() => setIsLoggedIn(!isLoggedIn)}>
    {isLoggedIn ? "Log out" : "Log in"}
</button>
        </div>
    )
}

export default Toggle
