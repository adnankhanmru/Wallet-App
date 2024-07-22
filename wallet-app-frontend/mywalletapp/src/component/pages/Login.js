import React, { useState, useContext } from 'react';
import UserContext from '../context/Context';
import axios from 'axios';

const Login = () => {
    const { username, setUsername, password, setPassword } = useContext(UserContext);

    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('/auth/signin', { username, password });
            const { token } = response.data;

            // Save the token to localStorage or a state management store like Redux
            localStorage.setItem('token', token);

            // Redirect to a different page or show a success message
            setMessage('Login successful!');
            window.location.href = '/dashboard'; // Example of redirection after login
        } catch (error) {
            setMessage('Login failed. Please check your username and password.');
        }
    };

    return (
        // <div>
        //     <h2>Login</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>Username</label>
        //             <input
        //                 type="text"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <label>Password</label>
        //             <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <button type="submit">Login</button>
        //     </form>
        // </div>

        <div className="h-full">
        {/* <!-- Container --> */}
        <div className="mx-auto">
            <div className=" flex justify-center px-4 py-28">
                {/* <!-- Row --> */}
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    {/* <!-- Col --> */}
                    <div className="w-auto h-auto bg-blue-500 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-center bg-no-repeat bg-contain rounded-l-lg"
                        style={{ backgroundImage: 'url(https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png)' }}></div>
                    {/* <!-- Col --> */}
                    <div className=" w-full lg:w-7/12  bg-white border-2 dark:bg-gray-900 p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="py-4 text-2xl text-center font-bold text-gray-800 dark:text-white">Log into your Account</h3>
                        <form onSubmit={handleLogin} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                           
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                    Username
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="username"
                                    placeholder="John Doe"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            {/* <div className="text-center">
                                <a className=" pb-2 inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800 font-semibold" href="#">
                                    Forgot Password?
                                </a>
                            </div> */}
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800 font-semibold" href="./index.html">
                                    New User? Register!
                                </a>
                            </div>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
