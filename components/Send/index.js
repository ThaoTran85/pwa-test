import Image from "next/image";
import React from "react";

const Send = () => {
  return (
    <section className='send section'>
      <div className='send__container bd-container bd-grid'>
        <div className='send__content'>
          <h2 className='section__title'>Đăng ký nhận bản tin</h2>
          <p className='send__description'>
            Hãy đăng ký email để cập nhật những công nghệ và chiến lược
            marketing mới từ chúng tôi!
          </p>
          <form>
            <div className='send__diection'>
              <input className='send__input' />
              <button>Subscribe</button>
            </div>
          </form>
        </div>
        <div className='send__img'>
          <Image src='' alt='' style={{ width: "100px", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
};

export default Send;
