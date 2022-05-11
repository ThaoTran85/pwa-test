import Image from "next/image";
import React from "react";
import about1 from "../../public/assets/img/about-extra-1.svg";
import about2 from "../../public/assets/img/about-extra-2.svg";
import about3 from "../../public/assets/img/about-img.svg";

const About = () => {
  return (
    <section className='about section bd-container' id='about'>
      <h2 className='section__title'>Về chúng tôi</h2>
      <p className='section__description'>CÔNG TY CỔ PHẦN CÔNG NGHỆ VINORSOFT</p>
      <div className="about__item">
      <div className='about__container bd-grid'>
        <div className='about__data'>
          <p className='about__description'>
            Vinorsoft bắt đầu từ ý tưởng tạo một cuộc cách mạng trong việc kết
            hợp các giải pháp công nghệ thông tin và viễn thông để ứng dụng vào
            việc xây dựng hệ thống cho doanh nghiệp. Với phương châm “Luôn tận
            tâm, luôn trung thực, luôn gắn kết”, Vinorsoft cam kết đưa đến khách
            hàng các giải pháp hàng đầu, chất lượng và tiết kiệm nhất.
          </p>
          <div className='about__items'>
            <div className='about__itemsIcon'>
              <ion-icon name='cash'></ion-icon>
            </div>
            <div className='about__itemsContent'>
              <h2>Uy tín</h2>
              <p>Chúng tôi cam kết mang đến một dịch vụ tốt nhất cho bạn.</p>
            </div>
          </div>
          <div className='about__items'>
            <div className='about__itemsIcon'>
              <ion-icon name='thumbs-up'></ion-icon>
            </div>
            <div className='about__itemsContent'>
              <h2>Chất lượng</h2>
              <p>Chúng tôi có một đội ngũ chuyên gia giàu kinh nghiệm.</p>
            </div>
          </div>
          <div className='about__items'>
            <div className='about__itemsIcon'>
              <ion-icon name='trending-up'></ion-icon>
            </div>
            <div className='about__itemsContent'>
              <h2>Hiệu quả</h2>
              <p>Sự hài lòng của khách hàng chính là động lực cho chúng tôi.</p>
            </div>
          </div>
        </div>
        <div className='about__img' style={{width: '200%'}}>
          <Image src={about3} alt=''/>
        </div>
      </div>
      <div className='about__container bd-grid'>
        <div className='about__data'>
          <h2 className='about__title'>Tầm nhìn</h2>
          <p className='about__description'>
            Trở thành một Đối tác tin cậy của tất cả các doanh nghiệp/tổ chức
            trong việc Cung cấp các dịch vụ liên quan tới Sản xuất Phần mềm và
            Giải pháp Công nghệ Thông tin, dựa trên nền tảng hợp tác vững mạnh,
            lâu dài và bền vững.
          </p>
          <p className='about__description'>
            Chúng tôi luôn mong muốn gắn liền lợi ích của Tập thể với lợi ích Cá
            nhân, gắn liền lợi ích của Công ty với lợi ích của Khách hàng.
          </p>
        </div>
        <div className='about__img' style={{order: -1, width: '200%'}}>
          <Image src={about1} alt='' />
        </div>
      </div>
      <div className='about__container bd-grid'>
        <div className='about__data'>
          <h2 className='about__title'>Sứ mệnh</h2>
          <p className='about__description'>
            Phát triển các Giải pháp Phần mềm tổng thể giúp cho công việc kinh
            doanh của mọi Doanh nghiệp, cá nhân trở nên Dễ dàng và Hiệu quả hơn.
          </p>
          <p className='about__description'>
            Xây dựng môi trường làm việc chuyên nghiệp, sáng tạo và nhân văn.
            Tạo điều kiện và cơ hội phát triển công bằng cho tất cả nhân viên.
          </p>
          <p className='about__description'>
            Đồng hành phát triển, từng bước hiện đại hoá công tác quản lý vận
            hành của các Doanh nghiệp tiến tới nền công nghiệp 4.0
          </p>
        </div>
        <div className='about__img' style={{ width: '80%'}}>
          <Image src={about2} alt='' />
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
