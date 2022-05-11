import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <section className='profile section bd-container' id='profile'>
      <h2 className='section__title'>Hồ sơ năng lực</h2>
      <div className='profile__container bd-grid'>
        <div className='profile__data'>
          <div className='profile__image'>
            <Image src='' alt='' />
          </div>
          <div className='profile__content'>
            <h3 className='profile__title'>thẩm định giá</h3>
          </div>
        </div>
        <div className='profile__data'>
          <Image src='' alt='' />
          <h3 className='profile__title'>thẩm định giá</h3>
        </div>
        <div className='profile__data'>
          <Image src='' alt='' />
          <h3 className='profile__title'>thẩm định giá</h3>
        </div>
      </div>
    </section>
  );
};

export default Profile;
