import React from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Image from 'next/image';
import slide13 from '../../public/assets/img/slide13.jpg'
import slide14 from '../../public/assets/img/slide14.jpg'
import slide15 from '../../public/assets/img/slide15.jpg'
import slide16 from '../../public/assets/img/slide16.jpg'
import slide17 from '../../public/assets/img/slide17.jpg'
import slide18 from '../../public/assets/img/slide18.jpg'
import slide19 from '../../public/assets/img/slide19.jpg'
import slide20 from '../../public/assets/img/slide20.jpg'
import slide21 from '../../public/assets/img/slide21.jpg'
import slide22 from '../../public/assets/img/slide22.jpg'
import slide23 from '../../public/assets/img/slide23.jpg'
import slide24 from '../../public/assets/img/slide24.jpg'
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Slides2 = () => {
    return (
        <section className='slides section bd-container' id='teams'>
            <div className='slides__container bd-grid'>
                <Carousel autoplay style={{ width: '1200px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide13} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide14} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide15} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide16} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide17} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide18} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide19} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide20} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide21} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide22} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide23} alt='' width='1200px' height='800px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Image src={slide24} alt='' width='1200px' height='800px' />
                    </div>

                </Carousel>
            </div>
        </section>
    )
}

export default Slides2