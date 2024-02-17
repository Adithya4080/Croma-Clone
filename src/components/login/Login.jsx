import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const history = useNavigate();
    const handleLogin = () => {
        history('/')
    }
    return (
        <>
        <Helmet>
            <title>Login | Croma</title>
        </Helmet>
            <div className='text-white flex justify-center items-center min-h-screen  pt-6'>
                <div className='bg-slate-900 rounded-lg p-8'>
                    <div className='flex border border-gray-600 rounded-lg items-center justify-between py-1 mb-4'>
                        <h2 className='ml-10'>Login</h2>
                        <h3 className='py-1 px-1 border border-gray-600 rounded-lg'>OR</h3>
                        <Link to='/auth/signup'><h2 className='mr-10'>Create Account</h2></Link>
                    </div>
                    <div className='mb-1'><p>Enter your Email ID or Phone number</p></div>
                    <div>
                        <input type="email" placeholder='Enter your Email ID' className='border border-gray-600 pr-56 pl-4 py-2 rounded-lg bg-transparent mb-5'/>
                    </div>
                    <div className='mb-1'><p>Enter your Username</p></div>
                    <div>
                        <input type="email" placeholder='Enter your Username' className='border border-gray-600 pr-56 pl-4 py-2 rounded-lg bg-transparent mb-5'/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input type="checkbox" className='h-5 w-5 mr-2' />
                        <small className='font-bold'>Keep me signed in</small>
                    </div>
                    <div className='text-sm my-4'>
                        <p>By continuing you agree to our <a href="/" className='text-teal-500 underline'>Terms of use</a> &<a href="/" className='text-teal-500 underline'>Privacy Policy</a></p>
                    </div>
                    <div>
                        <button onClick={handleLogin} className='border border-none rounded-lg bg-teal-500 text-black py-1 px-48'>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login