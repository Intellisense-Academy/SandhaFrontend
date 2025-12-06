
import { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { apiRequest } from '../common/common.js'

const Login = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    const [data, setData] = useState({ mobileNumber: '', password: '' })
    const [inputErrors, setInputErrors] = useState({})

    const handleErrors = () => {
        const tempError = {}

        if (data.mobileNumber.length === 0) {
            tempError.mobileNumber = "Please enter an mobile Number";
        }
        else if (data.mobileNumber.length !== 10) {
            tempError.mobileNumber = "Please enter a 10 digit no";
        }
        if (!data.password.trim()) {
            tempError.password = "Please enter a password";
        }
        else if (data.password.length < 8) {
            tempError.password = "Password must be at least 8 characters";
        }

        setInputErrors(tempError);
        return Object.keys(tempError).length > 0;
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (handleErrors()) return;

        try {
            const response = await apiRequest({ method: "POST", endPoint: "/login", data: data });
            alert(response.message);
        } catch (err) {
            alert(err.message || "Something went wrong");
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h3 className="text-3xl font-semibold">Login Page</h3>

            <form className="border p-5 rounded sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 mt-5 custom-input " onSubmit={handleSubmit}>
                <label className="block mt-3">
                    <span className="block text-sm font-medium text-slate-700">Mobile No</span>
                    <input type="number" className={`input-style border ${inputErrors.mobileNumber ? 'border-red-500' : 'border-slate-300'}`} name="mobileNumber" onChange={handleChange} value={data.mobileNumber} />
                    <p className="text-red-500 text-sm">{inputErrors.mobileNumber ? inputErrors.mobileNumber : ''}</p>
                </label>
                <label className="block relative  mt-3">
                    <span className="block text-sm font-medium text-slate-700">Password</span>
                    <input type={togglePassword ? "text" : "password"} className={`input-style border ${inputErrors.password ? 'border-red-500' : 'border-slate-300'}`} name="password" onChange={handleChange} value={data.password} />
                    <span className="absolute eyes-icons" onClick={() => setTogglePassword(!togglePassword)} > {togglePassword ? <IoEyeSharp /> : <FaEyeSlash />}</span>
                    <p className="text-red-500 text-sm">{inputErrors.password ? inputErrors.password : ''}</p>
                </label>
                <button
                    type="submit"
                    className="w-1/2 md:w-1/4 mt-3 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full ">
                    Login
                </button>

            </form>
        </div>
    )
}

export default Login