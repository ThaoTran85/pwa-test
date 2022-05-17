import React from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Image from 'next/image';
import slide1 from '../../public/assets/img/slide1.jpg'
import slide2 from '../../public/assets/img/slide2.jpg'
import slide3 from '../../public/assets/img/slide3.jpg'
import slide4 from '../../public/assets/img/slide4.jpg'
import slide5 from '../../public/assets/img/slide5.jpg'
import slide6 from '../../public/assets/img/slide6.jpg'
import slide7 from '../../public/assets/img/slide7.jpg'
import slide8 from '../../public/assets/img/slide8.jpg'
import slide9 from '../../public/assets/img/slide9.jpg'
import slide10 from '../../public/assets/img/slide10.jpg'
import slide11 from '../../public/assets/img/slide11.jpg'
import slide12 from '../../public/assets/img/slide12.jpg'
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Slides = () => {
    return (
        <section className='slides section bd-container' id='teams'>
            <div className='slides__container bd-grid'>
                <Carousel autoplay style={{ width: '1200px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide1} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide2} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide3} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide4} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide5} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide6} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide7} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide8} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide9} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide10} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide11} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide12} alt='' width='1200px' height='800px' />
                    </div>

                </Carousel>
            </div>
        </section>
    )
}

export default Slides