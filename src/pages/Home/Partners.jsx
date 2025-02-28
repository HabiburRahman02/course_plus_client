import person1 from '../../assets/partners/partner1.png'
import person2 from '../../assets/partners/partner2.png'
import person3 from '../../assets/partners/partner3.png'
import person4 from '../../assets/partners/partner4.png'
import person5 from '../../assets/partners/partner5.png'
import person6 from '../../assets/partners/partner6.png'
import person7 from '../../assets/partners/partner7.webp'
import person8 from '../../assets/partners/partner8.jpeg'

import Marquee from 'react-fast-marquee';
import Partner from './Partner'
import Heading from '../../components/Heading'

const Partners = () => {
    return (
        <div className='my-20'>
            <div>
                <div>
                    <Heading title='Our all partners here'></Heading>
                    <Marquee pauseOnHover={true}>
                        <div className=" flex gap-6  pl-6">
                            <Partner img={person1} ></Partner>
                            <Partner img={person2} ></Partner>
                            <Partner img={person3} ></Partner>
                            <Partner img={person4} ></Partner>
                            <Partner img={person5} ></Partner>
                            <Partner img={person6} ></Partner>
                            <Partner img={person7} ></Partner>
                            <Partner img={person8} ></Partner>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Partners;