import React from 'react';
import Button from '../../UI/Button/Button';
import './about.css';

function About() {
  const changeHandler = (e) => {
    console.log('кнопка');
  };
  return (
    <div className="mainpage_about_container">
      <div className="mainpage_about_content">
        <div className="mainpage_about_img">
          <img alt="about" src="images/main/About/0kCj5VDmCffmxfB.jpg" />
        </div>
        <div className="mainpage_about_text_block">
          <div className="mainpage_about_text">
            <h2> О нас</h2>
            <p>
              Путешествовать в компании всегда веселей! Мы находим похожих на
              нас людей, ценящих природу, красоту гор, озер, скал и рек.
            </p>
            <p>
              Мы объединяем союзников, делая жизнь ярче с каждым новым
              пройденным маршрутом. У нас вы найдете выезды на выходные -
              эмоциональные перезарядки от городской суеты! А также длительные
              походы.
            </p>
            <p>
              Длительные походы снабжаем сублимированной едой собственного
              приготовления.
            </p>
            <p>Открой мир с Лемуром, мы ждем тебя.</p>
          </div>
          <div className="mainpage_about_button">
            <Button changeHandler={changeHandler} text="Узнать подробнее" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
