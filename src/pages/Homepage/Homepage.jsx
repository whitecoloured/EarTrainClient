import './homepage.css'
import {useNavigate} from 'react-router'

function Homepage()
{
    const navigate=useNavigate();

    return(
        <div className="homePageForm">
            <img src='https://assets-global.website-files.com/6176f98d9518dc8adcea560e/644be73054787ea2c821f7e5_Mixing%20%26%20Mastering%20Banner%202.jpg' className='backgroundImage'/>
            <div className='container'>
                <div className='topSection'>
                    <h1>Добро пожаловать в EarTrain!</h1>
                    <p>Развивайте свой музыкальный слух, проходя простые тренировки!</p>
                    <button onClick={()=> navigate('training')}>Начать тренировку</button>
                </div>
                <div className='midSection'>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Тренировка</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Тренируйте свой слух, проходя разные задания: эквализация, панорамирование и динамика. При успешном прохождение тренировки вы будете получать 10 ET коинов!</p>
                        </div>
                        <div className='cardFooter'>
                            <button onClick={()=> navigate('training')}>Начать тренировку</button>
                        </div>
                    </div>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Обучение</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Просматривайте обучающий видеоматериал, который укрепит ваши знания. Это также даст сильный буст в процессе прохождения тренировки.</p>
                        </div>
                        <div className='cardFooter'>
                            <button>Начать просмотр</button>
                        </div>
                    </div>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Магазин</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Покупайте наши музыкальные товара за ET коины, полученные за успешно пройденные тренировки!</p>
                        </div>
                        <div className='cardFooter'>
                            <button>Перейти в магазин</button>
                        </div>
                    </div>
                </div>
                <p className='whyETText'>Почему EarTrain?</p>
                <div className='footerSection'>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Подходит для всех</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Тренировка подходит для тех, кто только начинает и для тех, кто уже профессионал в этом деле</p>
                        </div>
                    </div>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Интерактивные упражнения</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Практикуйтесь в эквализации, панорамировании и динамике звука</p>
                        </div>
                    </div>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Вознаграждение за успехи</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Получайте ET коины за успешно выполненные задания</p>
                        </div>
                    </div>
                </div>
                <div className='footerSection'>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Развитие музыкального слуха</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Улучшайте восприятие звуков и их характеристик через тренировки</p>
                        </div>
                    </div>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Гибкость занятий</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Тренируйтесь в любое удобное время без ограничений</p>
                        </div>
                    </div>
                    <div className='cardComp'>
                        <div className='cardHeader'>
                            <h3>Обучающие материалы</h3>
                        </div>
                        <div className='cardMain'>
                            <p>Просматривайте видеоуроки для повышения знаний и наиболее лучших результатов в тренировках</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;