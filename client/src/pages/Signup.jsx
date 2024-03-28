import { useState } from "react"

const defaultvalues = {
    email: "",
    username: "",
    password: ""
}

export const Signup = () =>{
    
    const [signupData, setSignupData ] = useState(defaultvalues)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }

    // handleChange
    const handleChange = (e) =>{
        setSignupData((prevVal) => ({
            ...prevVal,
            [e.target.name]: e.target.value,
        }))
        console.log(signupData)
    }

    return (
        <div className="__signup w-full h-[calc(100vh-60px)] bg-slate-800 text-white flex justify-center items-center">
            <form onSubmit={handleSubmit} className=" p-5 flex flex-col gap-2">
                <input 
                    className="text-black" 
                    type="email"
                    name="email" 
                    placeholder="Email" 
                    required
                    value={signupData.email}
                    onChange={handleChange}
                />
                <input 
                    className="text-black" 
                    type="text"
                    name="username" 
                    placeholder="Username" 
                    required
                    value={signupData.username}
                    onChange={handleChange}
                />
                <input 
                    className="text-black" 
                    type="password"
                    name="password" 
                    placeholder="Password" 
                    required
                    value={signupData.password}
                    onChange={handleChange}
                />
                <button className="primary-btn" type="submit">Signup</button>
            </form>
        </div>
    )
}