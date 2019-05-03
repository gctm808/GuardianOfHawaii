import React from 'react';
import '../css/styles.css';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';
import Button from '../components/molecules/button';
import landing from '../images/landing.jpg';
import Description from './description';

const App = () => {
    return (
        <div>
            <Header />
            {/*Content Div*/}
            <div style={{  backgroundImage: `url(${landing})`,
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
            <Footer />
        </div>
    );
};

export default App;