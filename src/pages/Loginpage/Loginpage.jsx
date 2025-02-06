import './loginpage.css'
import Logo from '../../assets/WhiteLogo.png'
import { useState } from 'react';

function Loginpage()
{
    const [loginData, setLoginData]=useState({
        input:'',
        password:''
    })

    function handleSubmit(e)
    {
        e.preventDefault();
        //send request to server
    }
    return(
        <div className="loginPageForm">
                <div className='mainSection'>
                    <form onSubmit={handleSubmit}>
                        <div className='imageContainer'>
                            <img src={Logo}/>
                        </div>
                        <div className='dataContainer'>
                            <label>Эл. почта / Логин</label>
                            <input name='Input' onChange={(e)=> setLoginData({...loginData, input:e.target.value})} placeholder='Введите логин или эмайл'/>
                            <label>Пароль</label>
                            <input name='Password' type='password' onChange={(e)=> setLoginData({...loginData, password:e.target.value})} placeholder='Введите пароль'/>
                            <button type='submit'>Войти</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Loginpage;