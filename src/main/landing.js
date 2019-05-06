import React from 'react';
import '../css/styles.css';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';
import Home from './home';
import About from './about';
import Products from './products';
import Contact from './contact';
import Login from './login';
import {Route} from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <Header />
            {/*Content Div*/}
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
            <Footer />
        </div>
    );
};

export default Landing;