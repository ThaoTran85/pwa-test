import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container bd-container'>
        <div className='footer__content'>
          <h2 className='footer__logo'>vinorsoft</h2>
          <p className='footer__description'>
            {" "}
            VINORSOFT là một doanh nghiệp trẻ, năng động, với một đội ngũ chuyên
            gia nhiệt tình, tâm huyết với công việc và có trình độ chuyên môn
            cao.
          </p>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Liên kết</h3>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='#home' className='footer__link'>
                Trang chủ
              </a>
            </li>
            <li className='footer__item'>
              <a href='#about' className='footer__link'>
                Về chúng tôi
              </a>
            </li>
            <li className='footer__item'>
              <a href='#service' className='footer__link'>
                Dịch vụ
              </a>
            </li>
            <li className='footer__item'>
              <a href='#terms' className='footer__link'>
                Điều khoản dịch vụ
              </a>
            </li>
            <li className='footer__item'>
              <a href='#policy' className='footer__link'>
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Our Company</h3>
          <p>
            Cơ sở 1: Số 115/30 Lê Quang Định Phường 14, quận Bình Thạnh Tp. Hồ
            Chí Minh.
          </p>
          <p>Phone: (028)62715899</p>
          <p>Email: support@vinorsoft.com</p>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title'>Social</h3>
          <div className='footer__socials'>
            <a className='footer__socialLink'>
              <i className='bx bxl-facebook-circle'></i>
            </a>
            <a className='footer__socialLink'>
              <i className='bx bxl-twitter'></i>
            </a>
            <a className='footer__socialLink'>
              <i className='bx bxl-instagram-alt'></i>
            </a>
          </div>
        </div>
      </div>

      <div className='footer__text'>
        <p className='footer__copy'>
          © Copyright
          <span>VINORSOFT</span>. All Rights Reserved
        </p>
        <p className='footer__design'>
          Designed by <a href='#home'>VINORSOFT</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
