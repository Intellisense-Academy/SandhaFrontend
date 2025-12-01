
import { useState } from 'react';
const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="border p-5 rounded sm:w-3/5 md:w-2/5 lg:w-2/5 xl:w-1/3">
                <label class="block mt-2">
                    <span class="block text-sm font-medium text-slate-700">Email</span>
                    <input type="email" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400   " />
                </label>
                <label class="block mt-2">
                    <span class="block text-sm font-medium text-slate-700">Password</span>
                    <input type="password" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 " />
                </label>
                <button
                    type="submit"
                    className="w-1/2 mt-2 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-full ">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login