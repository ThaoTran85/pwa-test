import Image from "next/image";
import React from "react";
import nangluc1 from "../../public/assets/img/nangluc1.png";
import nangluc2 from "../../public/assets/img/nangluc2.png";
import nangluc12 from "../../public/assets/img/nangluc12.png";
import nangluc13 from "../../public/assets/img/nangluc13.png";
import nangluc14 from "../../public/assets/img/nangluc14.png";
import nangluc6 from "../../public/assets/img/nangluc6.png";
import nangluc7 from "../../public/assets/img/nangluc7.png";
import nangluc15 from "../../public/assets/img/nangluc15.png";
import nangluc16 from "../../public/assets/img/nangluc16.png";
import nangluc10 from "../../public/assets/img/nangluc10.jpeg";
import nangluc17 from "../../public/assets/img/nangluc17.png";
const Profile = () => {
  return (
    <section className='profile section bd-container' id='profile'>
      <h2 className='section__title'>Hồ sơ năng lực</h2>
      <div className='profile__container'>
        <Image src={nangluc1} alt='' />
        <Image src={nangluc2} alt='' />
        <Image src={nangluc12} alt='' />
        <Image src={nangluc13} alt='' />
        <Image src={nangluc14} alt='' />
        <Image src={nangluc6} alt='' />
        <Image src={nangluc7} alt='' />
        <Image src={nangluc15} alt='' />
        <Image src={nangluc16} alt='' />
        <Image src={nangluc10} alt='' />
        <Image src={nangluc17} alt='' />
      </div>
    </section>
  );
};

export default Profile;
