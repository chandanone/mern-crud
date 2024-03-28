import {useNavigate} from 'react-router-dom'

export const Header = () =>{
    const naviagte = useNavigate()
    return (
        <nav className="h-[60px] flex w-full bg-slate-900 text-white p-3 justify-between items-center">
            <h2 onClick={()=> naviagte('/')} className="font-bold text-xl cursor-pointer select-none">React Login</h2>
            <ul className=" flex gap-1">
                <li>
                    <button onClick={()=> naviagte('/login')} className="primary-btn">Login</button>
                </li>
                <li><button onClick={()=> naviagte('/signup')} className="primary-btn">Signup</button></li>
            </ul>
        </nav>
    )
}