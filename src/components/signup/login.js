import '../../static/style/section.css'
import {FaFacebookF} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import {AiFillApple} from 'react-icons/ai';

const Login = props => {
    return <>
        <div className="fixed w-full h-screen z-30 flex items-center justify-center" onClick={props.onClick}>
            <div className="section bg-white rounded-md">
                <p className="flex py-8 justify-center font-bold text-2xl text-gray-700">
                    Join Fiverr
                </p>
                <button className='flex button1 rounded-md px-4 py-3 w-full hover:opacity-90 duration-300 mb-3'>
                    <div className='mt-1 ml-1 logo1 flex items-center justify-center'>
                        <FaFacebookF />
                    </div>
                    <p className='text-white w-full font-bold text-md flex justify-center'>Continue with Facebook</p>
                </button>
                <button className='flex button2 rounded-md px-4 py-3 w-full hover:opacity-90 hover:bg-gray-100 bg-white border duration-300 mb-3'>
                    <div className='mt-1 ml-1 text-xl flex items-center justify-center'>
                        <FcGoogle />
                    </div>
                    <p className='text-gray-600 w-full font-bold text-md flex justify-center'>Continue with Google</p>
                </button>
                <button className='flex button2 rounded-md px-4 py-3 w-full hover:opacity-90 hover:bg-gray-100 bg-white border duration-300 mb-2'>
                    <div className='mt-1 ml-1 text-xl flex items-center justify-center'>
                        <AiFillApple />
                    </div>
                    <p className='text-gray-600 w-full font-bold text-md flex justify-center'>Continue with Apple</p>
                </button>
                <div className='w-full flex text-gray-600 font-medium justify-center py-3 items-center mb-2'>OR</div>
                <input className='flex hover:border-gray-500 rounded-md px-4 py-2 w-full bg-white border border-gray-400 duration-200 font-semibold text-md mb-4' placeholder='Enter your email' />
                <button className='flex button3 rounded-md px-4 py-2 w-full hover:opacity-80 bg-white border duration-300 mb-4'>
                    <p className='text-white w-full font-semibold text-xl flex justify-center'>Continue</p>
                </button>
                <p className='text-sm flex w-full justify-center text-gray-500 font-semibold border-b border-gray-300 pb-6'>By joining I agree to receive emails from Fiverr.</p>
                <div className="flex mt-4 justify-center">
                    <p className='mr-1 text-gray-500 font-semibold'>Already a member?</p>
                    <p className='aaa'>Sign In</p>
                </div>

            </div>
        </div>
    </>
}

export default Login;