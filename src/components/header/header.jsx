import './header.css'
import Logo from '../../assets/WhiteLogo.png'
import { Link } from 'react-router';

function Header()
{
    return(
        <header>
            <div className='headerContainer'>
                <img className='logo' src={Logo}></img>
                    <Link to={'/'} className='navlink'>Главная</Link>
                    <Link to={'training'} className='navlink'>Тренировка</Link>
                    <Link to={'/'} className='navlink'>Обучение</Link>
                    <Link to={'/'} className='navlink' style={{marginRight:'17%'}}>Магазин</Link>
                    <Link to={'login'} className='navlink' style={{marginRight:'0.5%'}}>Вход</Link>
                    <span className='slash'>/</span>
                    <Link to={'register'} className='navlink' style={{marginRight:'0%'}}>Регистрация</Link>
            </div>
        </header>
    )
}

export default Header;