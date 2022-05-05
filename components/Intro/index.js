import Image from "next/image";
import React from "react";
import about from "../../public/assets/img/intro-img.svg";
const Intro = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container bd-container bd-grid'>
        <div className='home__img'>
          <Image src={about} alt='' style={{ width: "200px" }} />
        </div>

        <div className='home__data'>
          <h1 className='home__title'>
            Giải pháp công nghệ vì <span>con người!</span>
          </h1>
          <a href='#about' className='home__button active'>
            Về chúng tôi
          </a>
          <a href='#' className='home__button'>
            Dịch vụ
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
