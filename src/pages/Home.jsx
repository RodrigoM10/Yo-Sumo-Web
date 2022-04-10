import React from 'react'
import { HeaderMain } from '../components/headerMain/HeaderMain';
import Proyects from '../components/proyects/Proyects';
import Testimonials from '../components/testimonials/Testimonials';
import Results from '../components/Results/Results';
function Home() {

    return (
        <div className=''>
            <HeaderMain/>
            <Proyects/>
            <Testimonials/>
            <Results/>

        </div>
    )
}

export default Home;
