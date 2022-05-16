import Image from "next/image";
import React from "react";
import about from "../../public/assets/img/intro-img.svg";
import bg from '../../public/assets/img/intro-bg.png'
const Intro = () => {
  return (
    <section className='home' id='home' style={{backgroundColor: '#004a99'}}>
      <div className='home__container bd-container bd-grid'>
        <div className='home__img'>
          <Image src={about} alt='' />
        </div>

        <div className='home__data'>
          <h1 className='home__title'>
            Giải pháp công nghệ vì <span>con người!</span>
          </h1>
          <a href='#about' className='home__button active'>
            Về chúng tôi
          </a>
          <a href='#' className='home__button' style={{marginLeft: 10}}>
            Dịch vụ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
