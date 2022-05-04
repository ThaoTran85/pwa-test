import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className='intro' id='home'>
      <div className='home__container bd-container bd-grid'>
        <div className='home__img'>
          <Image src='' alt='' />
        </div>

        <div className='home__data'>
          <h1 className='home__title'>
            Giải pháp công nghệ vì <span>con người!</span>
          </h1>
        </div>

        <a href='#about' className='home__button active'>
          Về chúng tôi
        </a>
        <a href='#' className='home__button'>
          Dịch vụ
        </a>
      </div>
    </section>
  );
};

export default Intro;
