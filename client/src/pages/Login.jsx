import { useState } from "react"

const defaultvalues = {
    email: "",
    password: ""
}

export const Login = () =>{

    const [loginData, setLoginData] = useState(defaultvalues);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }

    // handleChange
    const handleChange = (e) =>{
        setLoginData((prevVal) => ({
            ...prevVal,
            [e.target.name]: e.target.value,
        }))
        console.log(loginData)
    }
    return (
        <div className="__login w-full h-[calc(100vh-60px)] bg-slate-800 text-white flex justify-center items-center">
            <form onSubmit={handleSubmit} className=" p-5 flex flex-col gap-2">
                <input 
                    className="text-black" 
                    type="email"
                    name="email" 
                    placeholder="Email" 
                    required
                    value={loginData.email}
                    onChange={handleChange}
                />
                <input 
                    className="text-black" 
                    type="password"
                    name="password" 
                    placeholder="Password" 
                    required
                    value={loginData.password}
                    onChange={handleChange}
                />
                <button className="primary-btn" type="submit">Login</button>
            </form>
        </div>
    )
}