import './Login.css';
import Netflix_logo from '../../assets/netflix_logo.svg';
import Login_page_bg_img from './login_page_background.jpg';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer';




function Login(){

    const [inputData, setInputData]=useState("");
    const [inputDataError, setInputDataError]=useState('');
    const [passwordInput, setPasswordInput]=useState("");
    const [passwordInputError, setPasswordInputError]=useState("")

    const navigate = useNavigate();

    function validateInputData(inputData){
        if(inputData.trim()===""){
            setInputDataError("This field is required")
        }else{
            setInputData(inputData);
            setInputDataError("")
        }
    }

    function validatePassword(enteredPassword){
        if(enteredPassword.trim()===""){
            setPasswordInputError("Password is required")
        }else{
            setPasswordInput(enteredPassword)
            setPasswordInputError("")
        }
    }

    function validateForm(){

        if(inputData.trim()===""){
            setInputDataError("This field is required")
            return;
        }else{
            setInputDataError("")
        }

        if(passwordInput.trim()===""){
            setPasswordInputError("Password is required")
            return;
        }else{
            setPasswordInputError("")
        }


        const originalPassword="123123";

        if(String(passwordInput)!==String(originalPassword)){
            setPasswordInputError("Incorrect password or email");
            return;
        }else{
            setPasswordInputError("")
        }

        navigate("/home");

    }

    return(
        <div>
            <div className='pb-40' style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Login_page_bg_img})`
            }}>

                <div className='px-40'>
                        <img className="h-24" src={Netflix_logo} alt="Netflix Logo" />
                </div>


                <div className='flex justify-center'>
                    <div className='flex flex-col gap-10 bg-black/65 p-14'>
                        <div className='text-white font-bold text-4xl'>
                            Sign In
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div>
                                <input 
                                        type="text" 
                                        placeholder='Email or mobile number' 
                                        className='text-white bg-black border border-white/50 rounded-md w-96 h-14 px-6'
                                        onChange={(e)=>validateInputData(e.target.value)}/>
                                        <div className='text-red-500'>{inputDataError && inputDataError}</div>
                            </div>

                            <div>
                                <input 
                                        type="password" 
                                        placeholder='Password' 
                                        className='text-white bg-black border border-white/50 rounded-md w-96 h-14 px-6' 
                                        onChange={(e)=>validatePassword(e.target.value)}/>
                                        <div className='text-red-500'>{passwordInputError && passwordInputError}</div>
                            </div>

                            <div>
                                <button 
                                        className='w-96 h-10 rounded bg-red-600 text-white font-bold'
                                        onClick={validateForm}>Sign In</button>
                            </div>

                            <div className='flex justify-center text-white/75'>
                                OR
                            </div>

                            <div>
                                <button className='w-96 h-10 rounded bg-white/20 text-white font-bold'>Use a sign-in code</button>
                            </div>

                            <div className='flex justify-center'>
                                <a className='underline text-white'>Forgot Password</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Login;