import React from 'react';
import Button from '../components/molecules/button';
import landing from '../images/landing.jpg';
import Description from './landing/description';
import About from './landing/about';
import Products from './landing/products';

const Home = () => {
    return (
        <div>
            <div style={{  backgroundImage: `url(${landing})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} className='landing'>
                <div className='l divider'>
                    <div className='headers'>
                        <h1>YOUR CLIENTS COME FIRST</h1>
                        <h2 style={{lineHeight: "1.5"}}>Guardian of Hawaii. <span style={{fontWeight: "lighter"}}>Helping you protect <br />what matters most to your clients.</span></h2>
                        <Button name='RUN MY QUOTE'/>
                    </div>
                </div>
            </div>
            <Description />
            <About />
            <Products />
        </div>
    );
};

export default Home;