import React, { useEffect, useState } from 'react';
import Button from '../../UI/Button/Button';
import './Slider.css';

function Slider() {
  const slider = [
    {
      id: 1,
      title: 'Путешествия с комфортом',
      img: '/images/main/Slider/nina-luong-dy4QG5c5xWQ.png',
    },
    {
      id: 2,
      title: 'Горнолыжные выезды',
      img: '/images/main/Slider/hendrik-morkel-o7qnO8myA28.png',
    },
    {
      id: 3,
      title: 'Недельные походы по России',
      img: '/images/main/Slider/katarzyna-pe-FwJflsYZnyM.png',
    },
    {
      id: 4,
      title: 'Путешествия по Азии',
      img: '/images/main/Slider/qingbao-meng-01_igFr7hd4.png',
    },
  ];

  const [image, setImage] = useState(slider[0]);

  const handleNext = () => {
    if (image.id < 4) {
      setImage(() => slider.find((el) => el.id > image.id));
    } else {
      setImage(() => slider[0]);
    }
  };

  const handleBack = () => {
    if (image.id > 1) {
      setImage(() => slider.reverse().find((el) => el.id < image.id));
    } else {
      setImage(() => slider[3]);
    }
  };

  const changeHandler = (e) => {
    console.log('кнопка');
  };

  return (
    <div className="mainPage_Slider">
      <img src={image.img} alt="slider_img" />

      {/* <div className="slider_button">
      </div> */}
      <div className="slider_carousel">
        <input
          className="slider_carousel_left"
          type="image"
          onClick={handleBack}
          alt="left"
          src="/images/main/Slider/IconLeft.png"
        />
        <div className="slider_title">
          <h1>{image.title}</h1>
          <div className="slider_button">
            <Button changeHandler={changeHandler} text="Подробнее" />
          </div>
        </div>
        <input
          className="slider_carousel_right"
          type="image"
          onClick={handleNext}
          alt="right"
          src="/images/main/Slider/IconRight.png"
        />
      </div>
    </div>
  );
}

export default Slider;
