import Image from "next/image";
import React from "react";
const Teams = () => {
  return (
    <section className='teams section bd-container' id='teams'>
      <h2 className='section__title'>Đội ngũ</h2>
      <p className='section__description'>
        Quy tụ đội ngũ chuyên gia giàu kinh nghiệm luôn cập nhật những xu hướng
        công nghệ mới
      </p>
      <div className='teams__container bd-grid'></div>
    </section>
  );
};

export default Teams;
