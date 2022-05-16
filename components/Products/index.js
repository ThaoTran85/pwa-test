import Image from "next/image";
import React from "react";
import products from "../../public/assets/img/products.png";
const Products = () => {
  return (
    <section className='products section bd-container' id='product'>
      <h2 className='section__title'>sản phẩm</h2>
      <p className='section__description'>
        {" "}
        Chúng tôi cung các các giải pháp và dịch vụ phần mềm:
      </p>

      <div className='products__container bd-grid'>
        <Image src={products} alt='' width='1200px' height='800px' />
      </div>
      {/* <div className='products__container bd-grid'>
        <div className='products__content'>
          <div className='product__img'>
            <ion-icon name='card'></ion-icon>
          </div>
          <div className='products__info'>
            <h3>PHẦN MỀM TRƯNG BÀY KIOSK</h3>
            <p>Các giải pháp trưng bày kiosk, cung cấp phần mềm và phần cứng</p>
          </div>
        </div>
        <div className='products__content'>
          <div className='product__img'>
            <ion-icon name='card'></ion-icon>
          </div>

          <h3 className='products__title'>PHẦN MỀM TRƯNG BÀY KIOSK</h3>
          <p className='products__category'>
            Các giải pháp trưng bày kiosk, cung cấp phần mềm và phần cứng
          </p>
        </div>
        <div className='products__content'>
          <div className='product__img'>
            <ion-icon name='card'></ion-icon>
          </div>

          <h3 className='products__title'>PHẦN MỀM TRƯNG BÀY KIOSK</h3>
          <p className='products__category'>
            Các giải pháp trưng bày kiosk, cung cấp phần mềm và phần cứng
          </p>
        </div>
        <div className='products__content'>
          <div className='product__img'>
            <ion-icon name='card'></ion-icon>
          </div>

          <h3 className='products__title'>PHẦN MỀM TRƯNG BÀY KIOSK</h3>
          <p className='products__category'>
            Các giải pháp trưng bày kiosk, cung cấp phần mềm và phần cứng
          </p>
        </div>
        <div className='products__content'>
          <div className='product__img'>
            <ion-icon name='card'></ion-icon>
          </div>

          <h3 className='products__title'>PHẦN MỀM TRƯNG BÀY KIOSK</h3>
          <p className='products__category'>
            Các giải pháp trưng bày kiosk, cung cấp phần mềm và phần cứng
          </p>
        </div>
        <div className='products__content'>
          <div className='product__img'>
            <ion-icon name='card'></ion-icon>
          </div>

          <h3 className='products__title'>PHẦN MỀM TRƯNG BÀY KIOSK</h3>
          <p className='products__category'>
            Các giải pháp trưng bày kiosk, cung cấp phần mềm và phần cứng
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Products;
