import React, { Fragment, useRef, useEffect, useState } from 'react'
import './login.css'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import FaceIcon from '@material-ui/icons/Face'
import { useDispatch, useSelector } from 'react-redux'
import {  login, register } from '../../actions/userAction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'


const LoginSingup = () => {

    const dispatch = useDispatch()
    const alert = useAlert();
const navigate = useNavigate()
    //RECEIVING FROM DATABASE
    const { error, loading, isAuthenticated } = useSelector((state) => state.user);


    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('')


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = user; //for signup

    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState('./Profile.png')

    const loginSubmit = (e) => {
        e.preventDefault()
        console.log('Form Submit');
        dispatch(login(loginEmail, loginPassword))
    }



    useEffect(() => {
        if (error) {
            alert.error(error);
            // dispatch(clearErrors())  
        };
        if (isAuthenticated) { //IF THE USER IS ALREADY LOGGED IN, IT WILL PUSHED-REDIRECTED TO THE ACCOUNT PAGE
            navigate('/account')
        }

    }, [dispatch, error, alert,navigate, isAuthenticated])

    const switchTabs = (e, tab) => {
        if (tab === 'login') {
            switcherTab.current.classList.add('shiftToNeutral')
            switcherTab.current.classList.remove('shiftToRight')

            registerTab.current.classList.remove('shiftToNeutralForm')
            loginTab.current.classList.remove('shiftToLeft')

        }
        if (tab === 'register') {
            switcherTab.current.classList.add('shiftToRight')
            switcherTab.current.classList.remove('shiftToNeutral')

            registerTab.current.classList.add('shiftToNeutralForm')
            loginTab.current.classList.add('shiftToLeft')
        }
    }



    const registerDataChange = (e) => {
        if (e.target.name === 'avatar') {
          const reader = new FileReader();
      
          reader.onload = () => {
            if (reader.readyState === 2) {
              const avatarDataUrl = reader.result;
              setAvatarPreview(avatarDataUrl);
              setAvatar(avatarDataUrl);
              console.log(avatarDataUrl)
            }
          };
      
          reader.readAsDataURL(e.target.files[0]);
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
          }));
        }
      };
      

    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set('name', name);
        myForm.set('email', email);
        myForm.set('password', password);
        myForm.set('avatar', avatar);
        dispatch(register(myForm))
    }



    return (

        <Fragment>
            {loading ? <Loader /> :

                <Fragment>
                    <div className="LoginSignupContainer">
                        <div className="LoginSignupBox">
                            <div>
                                <div className="login_singup_toggle">
                                    <p onClick={(e) => switchTabs(e, 'login')}>LOGIN</p>
                                    <p onClick={(e) => switchTabs(e, 'register')}>REGISTER</p>
                                </div>
                                <button ref={switcherTab}></button>
                            </div>

                            <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                                <div className="loginEmail">
                                    <MailOutlineIcon />
                                    <input type="email" placeholder='Email' required value={loginEmail} onChange={(e) => { setLoginEmail(e.target.value) }} />
                                </div>
                                <div className="loginPassword">
                                    <LockOpenIcon />
                                    <input type='password' placeholder='Password' required value={loginPassword} onChange={(e) => { setLoginPassword(e.target.value) }} />
                                </div>

                                <Link to='/password/forget'>Forget Password</Link>
                                <input type="submit" value='Login' className='loginBtn' />
                            </form>
                            <form className='signUpForm'
                                ref={registerTab}
                                encType='multipart/form-data'
                                onSubmit={registerSubmit} >

                                <div className="singUpName">
                                    <FaceIcon />
                                    <input type="text" placeholder='Name' required name='name' value={name} onChange={registerDataChange} />
                                </div>
                                <div className="signUpEmail">
                                    <MailOutlineIcon />
                                    <input type="email" placeholder='Email' required name='email' value={email} onChange={registerDataChange} />
                                </div>
                                <div className="signUpPassword">
                                    <LockOpenIcon />
                                    <input type="password" placeholder='Password' required name='password' value={password} onChange={registerDataChange} />
                                </div>
                                <div id='registerImage'>
                                    <img src={avatarPreview} alt="Avatar Preview" />
                                    <input type="file" name='avatar' accept='image/*' onChange={registerDataChange} />

                                </div>
                                <input type="submit" value='Register' className='signupBtn' />
                            </form>
                        </div>
                    </div>


                </Fragment>}
        </Fragment>



    )
}


export default LoginSingup