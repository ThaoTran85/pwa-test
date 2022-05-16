import React from "react";

const Header = () => {
  return (
    <header className='l-header' id='header'>
      <nav className='nav bd-container'>
        <a className='nav__logo'>VinorSoft</a>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                Trang chủ
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                Về chúng tôi
              </a>
            </li>
            <li className='nav__item'>
              <a href='#product' className='nav__link'>
                Sản phẩm
              </a>
            </li>
            <li className='nav__item'>
              <a href='#profile' className='nav__link'>
                Hồ sơ năng lực
              </a>
            </li>
            <li className='nav__item'>
              <a href='#teams' className='nav__link'>
                Đội ngũ
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        <div className='nav__toggle'>
          <i className='bx bx-grid-alt'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
