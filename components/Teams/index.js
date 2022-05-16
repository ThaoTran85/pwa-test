import Image from "next/image";
import React from "react";
import CTc from '../../public/assets/img/CTC.jpg'
import leduyan from '../../public/assets/img/leduyan.jpg'
import lexuanvuong from '../../public/assets/img/lexuanvuong.jpg'
import nguyenvanhau from '../../public/assets/img/nguyenvanhau.jpg'
import phandieuhuong from '../../public/assets/img/phandieuhuong.jpg'
import tranthanhho from '../../public/assets/img/tranthanhho.jpg'
const Teams = () => {
  return (
    <section className='teams section bd-container' id='teams'>
      <h2 className='section__title'>Đội ngũ</h2>
      <p className='section__description'>
        Quy tụ đội ngũ chuyên gia giàu kinh nghiệm luôn cập nhật những xu hướng
        công nghệ mới
      </p>
      <div className='teams__container bd-grid'>
        <div className='teams__data'>
          <div className="teams__image">
          <Image src={CTc} alt=''  className='teams__image-content' />
          </div>
          <div className="teams__info">
          <h3>Cù chung</h3>
          <p>Giám đốc</p>
          <div className="teams__socials">
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Gmail</a>
            <a>Linkedin</a>
          </div>
          </div>
        </div>
     
        <div className='teams__data'>
          <div className="teams__image">
          <img className='teams__image-content' src='../../assets/img/tranthanhho.jpg' alt=''/>
          </div>
          <div className="teams__info">
          <h3>Trần Thanh Hổ</h3>
          <p>Giám đốc</p>
          <div className="teams__socials">
            <a>Facebook</a>
            <a>Twitter</a>
            <a>Gmail</a>
            <a>Linkedin</a>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Teams;
