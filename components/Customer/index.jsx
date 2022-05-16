import Image from "next/image";
import React from "react";
import doitac from "../../public/assets/img/doitac.png";
const Customer = () => {
    return (
        <section className='profile section bd-container' id='customer'>
            <h2 className='section__title'>Khách hàng, đối tác</h2>
            <div className='profile__container bd-grid'>
                <Image src={doitac} alt='' width='1200px' height='800px' className="imageConfig" />
            </div>
        </section>
    );
};

export default Customer;
